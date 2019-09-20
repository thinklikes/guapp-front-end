<template>
    <el-form
        :ref="references.mainForm"
        v-loading="loading"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
        <el-form-item
            :label="$t('orders.label.taxType')"
            prop="tax_type"
        >
            <TaxTypeSelector
                ref="tax_type"
                v-model="ruleForm.tax_type"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addNewItem">{{ $t('table.add') }}</el-button>
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
                height="500"
            >
                <el-table-column
                    :label="$t('items.label.name')"
                >
                    <template
                        slot-scope="scope"
                    >
                        <ItemSelector
                            :key="'items' + scope.$index"
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
import { default as ItemSelector } from '@/components/Selectors/ItemSelector'
import { default as DiscountSelector } from '@/components/Selectors/DiscountSelector'
import { default as TaxTypeSelector } from '@/components/Selectors/TaxTypeSelector'

export default {
    name: 'SelectorTest',
    components: { ItemSelector, DiscountSelector, TaxTypeSelector },
    data() {
        return {
            references: {
                mainForm: 'ruleForm',
                discount: 'discount',
                suppliers: 'suppliers'
            },
            loading: false,
            loadingStr: 'Loading ....',
            ruleForm: {
                tax_type: 1,
                details: [
                    {
                        id: 3,
                        order_id: 3,
                        item_id: 339,
                        quantity: 1,
                        price: 300,
                        price_rate: 1,
                        note: '',
                        item: {
                            id: 339,
                            name: 'Vogue 水晶 凝膠甲練習液(練習油) 15ml'
                        }
                    },
                    {
                        id: 4,
                        order_id: 3,
                        item_id: 340,
                        quantity: 1,
                        price: 280,
                        price_rate: 1,
                        note: '',
                        item: {
                            id: 340,
                            name: 'BT NAIL 超Q水晶粉雕粉 5g 裝 #9入'
                        }
                    }
                ]
            },
            rules: {
                tax_type: [
                    { required: true, message: this.$t('orders.placeholder.taxType') },
                    { type: 'number', message: this.$t('orders.placeholder.taxType') }
                ],
                details: [
                    {
                        validator: function(rule, values, callback) {
                            const items = values.filter((value) => { return value.item_id })
                            console.log(items)
                            if (items.length <= 0) {
                                callback(new Error('请再次输入密码'))
                            } else {
                                callback()
                            }
                        }
                    }
                ]
            }
        }
    },
    created() {},
    methods: {
        addNewItem() {
            this.ruleForm.details.push({
                item_id: null,
                quantity: 0,
                price: 0,
                price_rate: 1,
                item: []
            })
            window.scrollTo(0, document.body.scrollHeight)
        },
        changed() {
            console.log(this.item_id)
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('created!!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        deleteItem(index) {
            this.ruleForm.details.splice(index, 1)
        }
    }
}
</script>
