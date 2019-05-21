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
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-input
            type="text"
            size="mini"
            placeholder="请输入内容"
            v-model="scope.name"
            v-show="showField(scope)"
            @focus="focusField(scope)"
            @blur="blurField(scope)"
            :autofocus="true"
            clearable>
          </el-input>
          <span
            v-show="!showField(scope)">
              {{ scope.name }}
            </span>
          <el-button
            type="text"
            size="mini"
            @click="focusField(scope)">
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

    methods: {
      focusField(scope){
        console.log(scope);
        console.log(scope.$index);
        this.editField = scope.$index;
      },

      blurField(scope){
        update(node.data);
        this.editField = '';
      },

      showField(scope){
        return this.editField === scope.$index
      },

      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },

    created() {
      fetchList().then(response => {
        this.tableData = response.contents.data;
        this.loading = false
      }).catch(e => {
        console.log(e);
      });
    }
  }
</script>
