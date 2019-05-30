<template>
  <div class="app-container">
    <el-card
      v-loading="loading"
      :data="data"
      :empty-text="loadingStr"
      class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ data.code }} {{ data.name }}</span>
      </div>
      <div class="text item">
        建立時間： {{ data.created_at }}
      </div>
      <div class="text item">
        品項類別： {{ data.item_type.name }}
      </div>
      <div class="text item">
        品項單位： {{ data.item_unit.name }}
      </div>
      <div class="text item">
        進貨價格： {{ data.buying_prize }}
      </div>
      <div class="text item">
        銷售價格： {{ data.selling_prize }}
      </div>
    </el-card>
    <span>
      <el-button
        size="mini"
        @click="edit()">Edit</el-button>
      <el-button
        size="mini"
        type="danger"
        @click="remove()">Delete</el-button>
    </span>
  </div>
</template>

<script>
  const defaultItem = {
    name: '',
    code: '',
    item_type: {
      'name': ''
    },
    item_unit: {
      'name': ''
    },
    buying_prize: 0,
    selling_prize: 0
  };

  import { fetchOne } from '@/api/items';
  import { destroy } from '@/api/items';

  export default {
    name: 'ShowItem',
    data() {
      return {
        data: Object.assign({}, defaultItem),
        id: null,
        loadingStr: "Loading ....",
        loading: true,
      }
    },
    created() {
      const id = this.$route.params && this.$route.params.id

      this.id = id;

      fetchOne(id)
        .then(response => {
          this.data = response.contents;
          this.loading = false;
        })
        .catch(e => {
          console.log(e)
        })
    },
    methods: {
      edit() {
        this.$router.push({ path: '/stock-manager/items/edit/' + this.id })
      },
      remove() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          destroy(this.data).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.$router.push({ path: '/stock-manager/items/list' })
          }).catch(e => {
            console.log(e);
          });
        }).catch(e => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }

    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
