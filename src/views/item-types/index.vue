<template>
  <div class="app-container">
    <div class="custom-tree-container">
      <div class="block">
        <p>品項類別</p>
        <el-tree
          :data="data"
          v-loading="loading"
          empty-text="loadingStr"
          node-key="id"
          :expand-on-click-node="false">
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
                @click="() => append(data)">
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
  import { updateItemType } from '@/api/item-types'
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
        editField : ''
      }
    },

    created() {
      fetchList().then(response => {
        this.data = response.data.itemTypes
        id = response.data.maxId + 1
        this.loading = false
      }).catch(e => {
        console.log(e);
      });
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'new item', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
        newChild.parent_id = data.id
        createItemType(newChild)
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          children.splice(index, 1);
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
        updateItemType(node.data);
        this.editField = '';
      },

      showField(node){
        return this.editField == node.id
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

