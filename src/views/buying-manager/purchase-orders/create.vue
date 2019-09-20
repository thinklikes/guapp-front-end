<template>
    <el-form
        :ref="references.mainForm"
        v-loading="loading"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
        <el-form-item
            :label="$t('orders.label.code')"
        >
            {{ code }}
        </el-form-item>
        <el-form-item
            :label="$t('suppliers.label.name')"
            prop="supplier_id"
        >
            <SupplierSelector
                :ref="references.suppliers"
                v-model="ruleForm.supplier_id"
                :init-options="defaultSuppliersOptions"
            />
        </el-form-item>
        <el-form-item
            :label="$t('orders.label.taxType')"
            prop="taxType"
        >
            <TaxTypeSelector
                ref="tax_type"
                v-model="ruleForm.tax_type"
            />
        </el-form-item>
        <el-form-item
            :label="$t('table.fastFillQuantity')"
        >
            <el-input-number
                v-model="fastFillQuantity"
                :min="1"
                :max="10"
                label="描述文字"
                @change="fillQuantity"
            />
        </el-form-item>
        <el-form-item
            :label="$t('table.fastFillDiscount')"
        >
            <el-col>
                <DiscountSelector
                    v-model="fastFillDiscount"
                    @change="fillDiscount"
                />
            </el-col>
        </el-form-item>
        <el-form-item :label="$t('table.note')">
            <el-input v-model="ruleForm.note" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addNewItem">{{ $t('table.add') }}</el-button>
        </el-form-item>
        <el-form-item>
            <hr>
        </el-form-item>
        <el-form-item
            prop="details"
        >
            <el-table
                v-loading="loading"
                :empty-text="loadingStr"
                :data="ruleForm.details"
                show-summary
                :summary-method="getSummaries"
                style="width: 100%"
            >
                <el-table-column
                    :label="$t('items.label.name')"
                >
                    <template slot-scope="scope">
                        <ItemSelector
                            :ref="'items' + scope.$index"
                            v-model="scope.row.item_id"
                            :init-options="scope.row.item"
                            class="is_full"
                        />
                    </template>
                </el-table-column>
                <el-table-column
                    :label="$t('table.quantity')"
                >
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.quantity" class="is_shortest" />
                    </template>
                </el-table-column>
                <el-table-column
                    :label="$t('details.label.price')"
                >
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.price" class="is_shortest" type="number" />
                    </template>
                </el-table-column>
                <el-table-column
                    :label="$t('details.label.price_rate')"
                >
                    <template slot-scope="scope">
                        <DiscountSelector
                            :ref="references.discount + scope.$index"
                            v-model="scope.row.price_rate"
                            class="is_shortest"
                        />
                    </template>
                </el-table-column>
                <el-table-column
                    align="right"
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
                        <el-input v-model="scope.row.note" />
                    </template>
                </el-table-column>
                <el-table-column>
                    <template slot-scope="scope">
                        <el-button type="danger" icon="el-icon-delete" @click="deleteItem(scope.$index)" />
                    </template>
                </el-table-column>
            </el-table>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">{{ $t('form.submit') }}</el-button>
            <el-button @click="resetForm('ruleForm')">{{ $t('form.reset') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { fetchOne } from '@/api/purchase-orders'
import { create } from '@/api/purchase-orders'
import { update } from '@/api/purchase-orders'
import { default as SupplierSelector } from '@/components/Selectors/SupplierSelector'
import { default as TaxTypeSelector } from '@/components/Selectors/TaxTypeSelector'
import { default as DiscountSelector } from '@/components/Selectors/DiscountSelector'
import { default as ItemSelector } from '@/components/Selectors/ItemSelector'

const mainPATH = '/buying-manager/purchase-orders'

export default {
    name: 'CreatePurchaseOrder',
    components: {
        SupplierSelector,
        TaxTypeSelector,
        DiscountSelector,
        ItemSelector
    },

    data() {
        const _this = this
        return {
            references: {
                mainForm: 'ruleForm',
                discount: 'discount',
                suppliers: 'suppliers'
            },
            loading: true,
            loadingStr: 'Loading ....',
            id: null,
            code: null,
            defaultSuppliersOptions: [],
            defaultItemsOptions: [],
            fastFillQuantity: null,
            fastFillDiscount: 1,
            originForm: {},
            ruleForm: {
                employee_id: '1',
                supplier_id: '',
                tax_type: '',
                note: '',
                details: []
            },
            rules: {
                supplier_id: [
                    { type: 'number', message: this.$t('suppliers.placeholder.name') }
                ],
                tax_type: [
                    { type: 'number', message: this.$t('orders.placeholder.taxType') }
                ],
                details: [
                    {
                        validator: function(rule, values, callback) {
                            const items = values.filter((value) => { return value.item_id })
                            if (items.length <= 0) {
                                callback(new Error(_this.$t('items.placeholder.name')))
                            } else {
                                callback()
                            }
                        }
                    }
                ]
            }
        }
    },

    computed: {
        isEdit() {
            return this.id !== null
        },
        summary() {
            let sum = 0
            let result = 0
            this.ruleForm.details.forEach((item) => {
                result = (item.quantity) * parseFloat(item.price) * parseFloat(item.price_rate)
                sum += result
            })
            return sum
        }
    },

    created() {
        const id = this.$route.params && this.$route.params.id

        if (!id) {
            this.loading = false
            this.addNewItem()
            return false
        }

        this.id = id

        fetchOne(id).then(response => {
            const data = response.contents
            this.originForm = JSON.parse(JSON.stringify(data))
            this.loading = false
            this.code = data.code
            this.defaultSuppliersOptions.push(data.supplier)
            this.ruleForm = {
                id: this.id,
                supplier_id: data.supplier_id,
                tax_type: data.tax_type,
                details: data.details
            }
        }).catch(e => {
            console.log(e)
        })
    },

    methods: {
        fillDiscount(val) {
            this.ruleForm.details.forEach(detail => {
                detail.price_rate = val
            })
        },
        fillQuantity(val) {
            this.ruleForm.details.forEach(detail => {
                detail.quantity = val
            })
        },
        addNewItem() {
            const newItem = {
                item_id: null,
                quantity: 0,
                price: 0,
                price_rate: 1,
                item: []
            }
            this.ruleForm.details.push(newItem)
            window.scrollTo(0, document.body.scrollHeight)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (!this.isEdit) {
                        create(this.ruleForm).then(response => {
                            this.$message.success(this.$t('form.created-successfully'))
                            this.$router.push({ path: mainPATH + '/show/' + response.contents.id })
                        }).catch(e => {
                            console.log(e)
                        })
                    } else {
                        update(this.ruleForm).then(response => {
                            this.$message.success(this.$t('form.updated-successfully'))
                            this.$router.push({ path: mainPATH + '/show/' + this.id })
                        }).catch(e => {
                            console.log(e)
                        })
                    }
                } else {
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
            if (Object.keys(this.originForm).length !== 0) {
                // deep copy
                this.ruleForm = JSON.parse(JSON.stringify(this.originForm))
            }
        },
        getSummaries(param) {
            const { columns } = param
            const sums = []
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = this.$t('table.total')
                    return
                }
                if (column.label === this.$t('table.subtotal')) {
                    sums[index] = this.summary
                    return
                }
                sums[index] = '-'
            })
            return sums
        },
        deleteItem(index) {
            this.ruleForm.details.splice(index, 1)
        }
    }
}
</script>
