<template>

    <el-form
        ref="ruleForm"
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
            prop="supplierId"
        >
            <SupplierSelector
                ref="suppliers"
                v-model="ruleForm.supplier_id"
                :init-options="initOptions"
            />
        </el-form-item>
        <el-form-item
            :label="$t('orders.label.taxType')"
            prop="supplierId"
        >
            <TaxTypeSelector
                ref="taxType"
                v-model="ruleForm.tax_type"
            />
        </el-form-item>
        <el-form-item :label="$t('table.note')">
            <el-input v-model="ruleForm.note" type="textarea" />
        </el-form-item>
        <hr>

        <el-table
            v-loading="loading"
            :empty-text="loadingStr"
            :data="ruleForm.details"
            show-summary
            :summary-method="getSummaries"
            style="width: 100%"
        >
            <el-table-column
                width="500"
                :label="$t('items.label.name')"
            >
                <template slot-scope="scope">
                    <el-input v-model="scope.row.item.name" />
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('table.quantity')"
            >
                <template slot-scope="scope">
                    <el-input v-model="scope.row.quantity" type="number" />
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('details.label.price')"
            >
                <template slot-scope="scope">
                    <el-input v-model="scope.row.price" type="number" />
                </template>
            </el-table-column>
            <el-table-column
                :label="$t('details.label.price_rate')"
            >
                <template slot-scope="scope">
                    <DiscountSelector
                        :ref="test(scope)"
                        :key="test(scope)"
                        v-model="scope.row.price_rate"
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
            <el-table-column>
                <template slot-scope="scope">
                    <el-button type="danger" @click="deleteItem(scope.$index)">{{ $t('table.delete') }}</el-button>
                </template>
            </el-table-column>
        </el-table>
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

const mainPATH = '/buying-manager/purchase-orders'

export default {
    name: 'CreatePurchaseOrder',
    components: { SupplierSelector, TaxTypeSelector, DiscountSelector },

    data() {
        return {
            loading: true,
            loadingStr: 'Loading ....',
            id: null,
            code: null,
            initOptions: {},
            ruleForm: {
                employee_id: '1',
                supplier_id: null,
                tax_type: null,
                note: '',
                details: [
                    {
                        item_id: null,
                        quantity: 0,
                        price: 0,
                        price_rate: 0,
                        item: {
                            id: null,
                            name: ''
                        }
                    }
                ]
            },
            rules: {
                // employee_id: [
                //     { type: 'number', message: this.$t('suppliers.placeholder.name'), trigger: 'change' }
                // ],
                supplier_id: [
                    { type: 'number', message: this.$t('suppliers.placeholder.name'), trigger: 'change' }
                ],
                tax_type: [
                    { type: 'number', message: this.$t('orders.placeholder.taxType') }
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
            return false
        }

        this.id = id

        fetchOne(id)
            .then(response => {
                const data = response.contents
                this.loading = false
                this.code = data.code
                this.initOptions = data.supplier
                this.ruleForm = {
                    supplier_id: data.supplier_id,
                    tax_type: data.tax_type,
                    details: data.details
                    // phone: data.phone,
                    // address: data.address,
                    // facebook: data.facebook,
                    // website: data.website,
                    // note: data.note
                }
            })
            .catch(e => {
                console.log(e)
            })
    },

    methods: {
        test(current) {
            // console.log(current.$index, current.row.item.name, current.row.price_rate)
            return 'discount' + current.$index
        },
        changed() {
            // console.log(this.ruleForm.supplierId)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (!this.isEdit) {
                        create(this.ruleForm)
                            .then(response => {
                                this.$message.success(this.$t('form.created-successfully'))
                                this.$router.push({ path: mainPATH + '/show/' + response.contents.id })
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    } else {
                        update(this.ruleForm)
                            .then(response => {
                                this.$message.success(this.$t('form.updated-successfully'))
                                this.$router.push({ path: mainPATH + '/show/' + this.id })
                            })
                            .catch(e => {
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
        deleteItem(index) {
            this.ruleForm.details.splice(index, 1)
        }
    }
}
</script>

