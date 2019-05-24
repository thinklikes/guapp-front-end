<template>
  <div class="app-container">
    <div class="custom-tree-container">
      <div class="block">
        <div class="filter-container">
          <el-input
            v-model="queryString"
            placeholder="品項代號或品項名稱"
            style="width: 200px;"
            class="filter-item"
            @keyup.enter.native="handleFilter" />

          <item-type-selector />

          <el-button
            class="filter-item"
            type="primary"
            icon="el-icon-search"
            @click="handleFilter">
            {{ $t('table.search') }}
          </el-button>
          <el-button
            class="filter-item"
            style="margin-left: 10px;"
            type="primary"
            icon="el-icon-edit"
            @click="add">
            {{ $t('table.add') }}
          </el-button>
        </div>
        <el-table
          v-loading="loading"
          :empty-text="loadingStr"
          :data="data"
          style="width: 100%">
          <el-table-column
            label="品項代號">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.code }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="品項類型">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.item_type.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="品項名稱">
            <template slot-scope="scope">
              <span style="margin-left: 10px">
                <router-link :to="'/stock-manager/items/show/'+scope.row.id" class="link-type">
                  <span>{{ scope.row.name }}</span>
                </router-link>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-container">
          <el-pagination
            background
            layout="sizes, prev, pager, next, total"
            :total="total"
            :page-size="perPage"
            :current-page="currentPage"
            :page-sizes="[50, 100, 200, 250]"
            @current-change="changePage"
            @size-change="changeSize"
            @prev-click="prevPage"
            @next-click="nextPage">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { fetchList } from '@/api/items'
  import { default as ItemTypeSelector } from './components/ItemTypeSelector'

  export default {
    name: 'Items',
    components: { ItemTypeSelector },
    data() {
      return {
        data: [],
        loadingStr: "Loading ....",
        loading: true,
        currentPage: 1,
        total : 0,
        perPage : 50,
        queryString: '',
        itemType: ''
      }
    },

    created() {
      this.requestPage();
    },

    methods: {
      add() {
        this.$router.push({ path: '/stock-manager/items/create' })
      },

      changeSize(size) {
        this.currentPage = 1;
        this.perPage = size;
        this.requestPage();
      },

      changePage(page) {
        this.requestPage(page);
      },

      prevPage() {
        this.currentPage = this.currentPage === 1 ? 1 : this.currentPage - 1;
        this.requestPage();
      },

      nextPage() {
        this.currentPage += 1;
        this.requestPage();
      },

      requestPage() {
        this.loading = true;

        fetchList(this.currentPage, this.perPage, this.queryString).then(response => {
          this.loading = false;
          this.parseResponseValues(response);
          scrollTo(0, 0)
        }).catch(e => {
          console.log(e);
        });
      },

      parseResponseValues(response) {
        this.data = response.contents.data;
        this.total = response.contents.total;
        this.currentPage = response.contents.current_page;
        this.total = response.contents.total;
        this.perPage = parseInt(response.contents.per_page);
      },

      handleFilter() {
        this.currentPage = 1;

        this.requestPage();
      }
    }
  };
</script>

<style scoped>
  .pagination-container {
    background: #fff;
    padding: 32px 16px;
  }
  .pagination-container.hidden {
    display: none;
  }
</style>
