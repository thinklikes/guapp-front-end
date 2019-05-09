<template>
  <div class="app-container">
    <div class="custom-tree-container">
      <div class="block">
        <p>使用 render-content</p>
        <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :expand-on-click-node="false"
            :render-content="renderContent">
        </el-tree>
      </div>
    </div>
  </div>
</template>
<script>
  import { fetchList } from '@/api/item-types'

  let id = 1000;

  export default {
    name: 'ItemTypes',
    data() {
      return {
        data: null
      }
    },

    created() {
      fetchList().then(response => {
        this.data = response.data
      }).catch(e => {
        console.log(e);
      });
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      edit(data) {
        console.log(data)
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={ () => this.edit(data) }>Edit</el-button>
            <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
            <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
          </span>
          </span>
        );
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

