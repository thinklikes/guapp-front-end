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
        {{ $t('table.updatedAt') }}{{ $t('common.colon') }}{{ data.updated_at }}
      </div>
      <div class="text item">
        {{ $t('items.label.itemTypeId') }}{{ $t('common.colon') }}{{ data.item_type.name }}
      </div>
      <div class="text item">
        {{ $t('items.label.itemUnitId') }}{{ $t('common.colon') }}{{ data.item_unit.name }}
      </div>
      <div class="text item">
        {{ $t('items.label.buyingPrize') }}{{ $t('common.colon') }}{{ data.buying_prize }}
      </div>
      <div class="text item">
        {{ $t('items.label.itemUnitId') }}{{ $t('common.colon') }}{{ data.selling_prize }}
      </div>
    </el-card>
    <span>
      <el-button
        size="mini"
        @click="edit()">{{ $t('table.edit') }}</el-button>
      <el-button
        size="mini"
        type="danger"
        @click="remove()">{{ $t('table.delete') }}</el-button>
    </span>
  </div>
</template>

<script>
  const URI = '/stock-manager/items';

  const defaultData = {
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
        data: Object.assign({}, defaultData),
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
        this.$router.push({ path: URI + '/edit/' + this.id })
      },
      remove() {
        this.$confirm(this.$t('table.deleteWarning'), this.$t('table.prompt'), {
          confirmButtonText: this.$t('el.messagebox.confirm'),
          cancelButtonText: this.$t('el.messagebox.cancel'),
          type: 'warning'
        }).then(() => {
          destroy(this.data).then(() => {
            this.$message({
              type: 'success',
              message: this.$t('form.deleted-successfully')
            });
            this.$router.push({ path: URI + '/list' })
          }).catch(e => {
            console.log(e);
          });
        }).catch(e => {
          this.$message({
            type: 'info',
            message: this.$t('form.deleted-cancel')
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
