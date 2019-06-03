<template>
  <div class="app-container">
    <el-card
      v-loading="loading"
      :data="data"
      :empty-text="loadingStr"
      class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ data.name }}</span>
      </div>
      <div class="text item">
        {{ $t('table.updatedAt') }}{{ $t('common.colon') }}{{ data.updated_at }}
      </div>
      <div class="text item">
        {{ $t('suppliers.label.supplierTypeId') }}{{ $t('common.colon') }}{{ data.supplier_type.name }}
      </div>
      <div class="text item">
        {{ $t('suppliers.label.phone') }}{{ $t('common.colon') }}{{ data.phone }}
      </div>
      <div class="text item">
        {{ $t('suppliers.label.address') }}{{ $t('common.colon') }}{{ data.address }}
      </div>
      <div class="text item">
        {{ $t('suppliers.label.facebook') }}{{ $t('common.colon') }}
        <span class="u_link" @click="handOpenNewLink(data.facebook)">{{ data.facebook }}</span>
      </div>
      <div class="text item">
        {{ $t('suppliers.label.website') }}{{ $t('common.colon') }}
        <span class="u_link" @click="handOpenNewLink(data.website)">{{ data.website }}</span>
      </div>
      <div class="text item">
        {{ $t('suppliers.label.note') }}{{ $t('common.colon') }}{{ data.note }}
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
  const URI = '/buying-manager/suppliers';

  const defaultData = {
    address: '',
    created_at: null,
    deleted_at: null,
    facebook: '',
    name: '',
    note: '',
    phone: '',
    supplier_type: {
      id: 0,
      name: ''
    },
    supplier_type_id: 0,
    updated_at: null,
    website: '',
  };

  import { fetchOne } from '@/api/suppliers';
  import { destroy } from '@/api/suppliers';

  export default {
    name: 'ShowSuppliers',
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
      },

      handOpenNewLink(url) {
        window.open(url, "_blank");
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
