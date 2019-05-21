<template>
  <div class="app-container">
    <el-table
      ref="myTable"
      v-loading="loading"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名稱">
        <template slot-scope="scope">
          <el-input
            :ref="'input' + scope.row.id"
            type="text"
            size="mini"
            placeholder="请输入内容"
            v-model="scope.row.name"
            v-show="showField(scope)"
            @blur="() => blurField(scope)"
            clearable>
          </el-input>
          <span
            v-show="!showField(scope)">
              {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="mini"
            @click="() => focusField(scope)">
            Edit
          </el-button>
          <el-button
            @click="deleteRow(scope.$index, tableData)"
            type="text"
            size="mini">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { fetchList } from '@/api/item-units'
  import { create } from '@/api/item-units'
  import { update } from '@/api/item-units'
  import { destory } from '@/api/item-units'

  export default {
    name: 'ItemUnits',
    data() {
      return {
        tableData: [],
        loadingStr: "Loading ....",
        loading: true,
        editField : '',
      }
    },

    created() {
      fetchList().then(response => {
        this.tableData = response.contents.data;
        this.loading = false
      }).catch(e => {
        console.log(e);
      });
    },

    methods: {
      focusField(scope){
        this.editField = scope.row.id;

        this.$nextTick(() => this.$refs["input" + scope.row.id].focus());
        // this.$nextTick(() => this.$refs["input" + scope.row.id].$el.children[0].focus());
      },

      blurField(scope){
        // update(node.data);
        this.editField = '';
      },

      showField(scope){
        return this.editField === scope.row.id
      },

      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
  }
</script>
