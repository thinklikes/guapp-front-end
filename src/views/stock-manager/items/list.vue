<template>
  <div class="app-container">
    <div class="custom-tree-container">
      <div class="block">
        <el-button
          type="text"
          size="mini"
          @click="() => add()">
          Add Item
        </el-button>
        <el-table
          v-loading="loading"
          :empty-text="loadingStr"
          :data="data"
          style="width: 100%">
          <el-table-column
            label="ID">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名">
            <template slot-scope="scope">
              <span style="margin-left: 10px">
                <router-link :to="'/stock-manager/items/show/'+scope.row.id" class="link-type">
                  <span>{{ scope.row.name }}</span>
                </router-link>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="pageCount"
          @prev-click="() => prev()"
          @next-click="() => next()">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import { fetchList } from '@/api/items'

  export default {
    name: 'Items',
    data() {
      return {
        data: [],
        loadingStr: "Loading ....",
        loading: true,
        pageCount: 1,
        currentPage: 1,
        total : 0,
      }
    },

    created() {
      this.requestPage();
    },

    methods: {
      add() {
        this.$router.push({ path: '/stock-manager/items/create' })
      },

      prev() {
        this.requestPage(this.currentPage === 1 ? 1 : this.currentPage - 1);
      },

      next() {
        this.requestPage(this.currentPage + 1);
      },

      requestPage(page = 1) {
        this.loading = true;
        fetchList(page).then(response => {
          this.loading = false;
          this.parseResponseValues(response);
        }).catch(e => {
          console.log(e);
        });
      },

      parseResponseValues(response) {
        this.data = response.contents.data;
        this.pageCount = response.contents.last_page;
        this.currentPage = response.contents.current_page;
        this.total = response.contents.total;
        console.log(response.contents)
      }
    }
  };
</script>

