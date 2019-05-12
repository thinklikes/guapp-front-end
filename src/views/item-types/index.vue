<template>
  <div class="app-container">
    <div class="custom-tree-container">
      <div class="block">
        <p>品項類別</p>
        <el-tree
          ref="myTree"
          v-loading="loading"
          node-key="id"
          empty-text="loadingStr"
          :data="data"
          :expand-on-click-node="false"
          @node-drop="handleDrop"
          @node-drag-start="handleDragStart"
          draggable>
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <el-input
              type="text"
              size="mini"
              placeholder="请输入内容"
              v-model="data.label"
              v-show="showField(node)"
              @focus="focusField(node)"
              @blur="blurField(node)"
              :autofocus="true"
              clearable>
            </el-input>
            <span
              v-show="!showField(node)">
              {{ node.label }}
            </span>
            <span>
              <el-button
                type="text"
                size="mini"
                @click="() => focusField(node)">
                Edit
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => append(node)">
                Append
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)">
                Delete
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>
<script>
  import { fetchList } from '@/api/item-types'
  import { updateItemTypeName } from '@/api/item-types'
  import { updateItemTypePriority } from '@/api/item-types'
  import { createItemType } from '@/api/item-types'
  import { removeItemType } from '@/api/item-types'

  let id;

  export default {
    name: 'ItemTypes',
    data() {
      return {
        data: [],
        loadingStr: "Loading ....",
        loading: true,
        editField : '',
        oldParentBeforeDragging: '',
      }
    },

    created() {
      fetchList().then(response => {
        this.data = response.data.itemTypes
        id = response.data.maxId
        this.loading = false
      }).catch(e => {
        console.log(e);
      });
    },

    methods: {
      append(parentNode) {
        const newChild = { id: ++id, label: 'new item' + id, children: [] };
        this.$refs.myTree.append(newChild, parentNode)
        newChild.parent_id = parentNode.data.id
        parentNode.expand()
        createItemType(newChild)
      },

      remove(node, data) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$refs.myTree.remove(node)
          removeItemType(data)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      focusField(node){
        this.editField = node.id;
      },

      blurField(node){
        updateItemTypeName(node.data);
        this.editField = '';
      },

      showField(node){
        return this.editField === node.id
      },

      handleDragStart(node, ev) {
        this.oldParentBeforeDragging = node.parent.data.id
        console.log(this.oldParentBeforeDragging);
      },

      handleDrop(draggingNode, dropNode, dropType, ev) {
        var parent_id;
        if ((dropType === 'before' || dropType === 'after')) {
          if (this.oldParentBeforeDragging !== dropNode.parent.data.id) {
            parent_id = dropNode.parent.data.id ? dropNode.parent.data.id : 0
            updateItemTypePriority(draggingNode.data, parent_id);
          }
          this.oldParentBeforeDragging = '';
        } else if (dropType === 'inner') {
          parent_id = dropNode.data.id
          updateItemTypePriority(draggingNode.data, parent_id);
        }
      },
    }
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>

