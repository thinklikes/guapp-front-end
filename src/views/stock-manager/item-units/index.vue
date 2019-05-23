<template>
  <div class="app-container">
    <div class="custom-tree-container">
      <div class="block">
        <el-button
          type="text"
          size="mini"
          @click="() => append()">
          Add Unit
        </el-button>
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <el-tree
          ref="itemUnitTree"
          v-loading="loading"
          node-key="id"
          :filter-node-method="filterNode"
          :empty-text="loadingStr"
          :data="data"
          :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <el-input
              :ref="'input' + node.key"
              type="text"
              size="mini"
              placeholder="请输入内容"
              v-model="data.label"
              v-show="showField(node)"
              @blur="() => blurField(node)"
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
  import { fetchList } from '@/api/item-units'
  import { create } from '@/api/item-units'
  import { update } from '@/api/item-units'
  import { destroy } from '@/api/item-units'

  export default {
    name: 'ItemUnits',
    data() {
      return {
        data: [],
        loadingStr: "Loading ....",
        loading: true,
        editField : '',
        filterText: '',
      }
    },

    created() {
      fetchList().then(response => {
        this.data = response.contents
        this.loading = false
      }).catch(e => {
        console.log(e);
      });
    },

    watch: {
      filterText(val) {
        this.$refs.itemUnitTree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },

      append() {
        const newChild = {label: 'new unit', children: [] };
        create(newChild).then(response => {
          this.$refs.itemUnitTree.append(newChild);
        }).catch(e => {
          console.log(e);
        });
      },

      remove(node, data) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          destroy(data).then(() => {
            this.$refs.itemUnitTree.remove(node);
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(e => {
            console.log(e);
          });
        }).catch(e => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      focusField(node) {
        this.editField = node.key;

        this.$nextTick(() => this.$refs["input" + node.key].focus());
      },

      blurField(node) {
        update(node.data);
        this.editField = '';
      },

      showField(node) {
        return this.editField === node.key
      }
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
