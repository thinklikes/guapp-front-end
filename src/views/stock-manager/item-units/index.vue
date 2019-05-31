<template>
  <div class="app-container">
    <div class="custom-tree-container">
      <div class="block">
        <el-button
          type="text"
          size="mini"
          @click="append">
          {{ $t('table.add') }}
        </el-button>
        <el-input
          :placeholder="$t('table.search')"
          v-model="filterText">
        </el-input>
        <el-tree
          ref="dataTree"
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
              :placeholder="$t('itemUnits.placeholder.name')"
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
                {{ $t('table.edit') }}
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)">
                {{ $t('table.delete') }}
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
        this.$refs.dataTree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },

      append() {
        const newChild = {label: 'new one', children: [] };
        create(newChild).then(response => {
          newChild.id = response.contents.id;
          this.$refs.dataTree.append(newChild);
        }).catch(e => {
          console.log(e);
        });
      },

      remove(node, data) {
        this.$confirm(this.$t('table.deleteWarning'), this.$t('table.prompt'), {
          confirmButtonText: this.$t('el.messagebox.confirm'),
          cancelButtonText: this.$t('el.messagebox.cancel'),
          type: 'warning'
        }).then(() => {
          destroy(data).then(() => {
            this.$refs.dataTree.remove(node);
            this.$message({
              type: 'success',
              message: this.$t('form.deleted-successfully')
            });
          }).catch(e => {
            console.log(e);
          });
        }).catch(e => {
          this.$message({
            type: 'info',
            message: this.$t('form.deleted-cancel')
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
