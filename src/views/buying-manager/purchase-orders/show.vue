<template>
    <div class="app-container">
        <el-card
            v-loading="loading"
            :data="data"
            :empty-text="loadingStr"
            class="box-card"
        >
            <div slot="header" class="clearfix">
                <span>{{ data.code }}</span>
            </div>
            <div class="text item">
                {{ $t('suppliers.label.name') }}{{ $t('common.colon') }}{{ data.supplier.name }}
            </div>
            <div class="text item">
                {{ $t('table.createdAt') }}{{ $t('common.colon') }}{{ data.created_at }}
            </div>
            <div class="text item">
                {{ $t('table.updatedAt') }}{{ $t('common.colon') }}{{ data.updated_at }}
            </div>
            <div class="text item">
                {{ $t('purchaseOrders.label.receivingDate') }}{{ $t('common.colon') }}{{ data.receiving_date }}
            </div>
            <div class="text item">
                {{ $t('table.note') }}{{ $t('common.colon') }}{{ data.note }}
            </div>
        </el-card>
        <br>
        <el-table
            v-loading="loading"
            :empty-text="loadingStr"
            :data="data.purchase_order_items"
            show-summary
            :summary-method="getSummaries"
            style="width: 100%"
        >
            <el-table-column
                :label="$t('items.label.name')"
            >
                <template slot-scope="scope">
                    <span>{{ scope.row.item.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('table.quantity')"
            >
                <template slot-scope="scope">
                    <span>{{ parseFloat(scope.row.quantity) }}</span>
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('purchaseOrderItems.label.price')"
            >
                <template slot-scope="scope">
                    <span>{{ parseFloat(scope.row.price) }}</span>
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('purchaseOrderItems.label.price_rate')"
            >
                <template slot-scope="scope">
                    <span>{{ parseFloat(scope.row.price_rate) * 100 }}%</span>
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('table.subtotal')"
            >
                <template slot-scope="scope">
                    <span>{{ parseFloat(scope.row.price) * parseFloat(scope.row.price_rate) * scope.row.quantity }}</span>
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('table.noteOfItem')"
            >
                <template slot-scope="scope">
                    <span>{{ scope.row.note }}</span>
                </template>
            </el-table-column>
        </el-table>
        <br>
        <span>
            <el-button
                size="mini"
                @click="edit()"
            >{{ $t('table.edit') }}</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="remove()"
            >{{ $t('table.delete') }}</el-button>
        </span>
    </div>
</template>

<script>
const mainPath = '/buying-manager/purchase-orders'

const defaultData = {
    'code': '',
    'receiving_date': '',
    'employee_id': 0,
    'supplier_id': 0,
    'tax_type': '',
    'note': '',
    'created_at': '',
    'updated_at': '',
    'supplier': {
        'name': ''
    },
    'purchase_order_items': [
        {
            'quantity': '',
            'price': '',
            'price_rate': '',
            'note': '',
            'item': {
                'id': 0,
                'name': ''
            }
        }
    ]
}

import { fetchOne } from '@/api/purchase-orders'
import { destroy } from '@/api/purchase-orders'

export default {
    name: 'ShowPurchaseOrders',
    data() {
        return {
            data: Object.assign({}, defaultData),
            id: null,
            loadingStr: 'Loading ....',
            loading: true
        }
    },
    computed: {
        summary: function() {
            let sum = 0
            let result = 0
            this.data.purchase_order_items.forEach((item) => {
                result = (item.quantity) * parseFloat(item.price) * parseFloat(item.price_rate)
                sum += result
            })
            return sum
        }
    },
    created() {
        const id = this.$route.params && this.$route.params.id

        this.id = id

        fetchOne(id).then(response => {
            this.data = response.contents
            this.loading = false
        }).catch(e => {
            console.log(e)
        })
    },
    methods: {
        edit() {
            this.$router.push({ path: mainPath + '/edit/' + this.id })
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
                    })
                    this.$router.push({ path: mainPath + '/list' })
                }).catch(e => {
                    console.log(e)
                })
            }).catch(e => {
                this.$message({
                    type: 'info',
                    message: this.$t('form.deleted-cancel')
                })
            })
        },
        getSummaries(param) {
            const { columns } = param
            const sums = []
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = this.$t('table.total')
                    return
                }
                if (index === 4) {
                    sums[index] = this.summary
                    return
                }
                sums[index] = '-'
            })
            return sums
        },
        handOpenNewLink(url) {
            window.open(url, '_blank')
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
