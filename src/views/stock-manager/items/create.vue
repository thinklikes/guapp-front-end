<template>
    <el-form ref="ruleForm" v-loading="loading" :model="ruleForm" :rules="rules" label-width="100px">
        <el-form-item :label="$t('items.label.code')" prop="code">
            <el-input v-model="ruleForm.code" />
        </el-form-item>
        <el-form-item :label="$t('items.label.name')" prop="name">
            <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item :label="$t('items.label.itemTypeId')" prop="itemTypeId">
            <ItemTypeSelector ref="itemType" v-model="ruleForm.itemTypeId" />
        </el-form-item>
        <el-form-item :label="$t('items.label.itemUnitId')" prop="itemUnitId">
            <ItemUnitSelector ref="itemUnit" v-model="ruleForm.itemUnitId" />
        </el-form-item>
        <el-form-item :label="$t('items.label.buyingPrize')">
            <el-input v-model="ruleForm.buyingPrize" />
        </el-form-item>
        <el-form-item :label="$t('items.label.sellingPrize')">
            <el-input v-model="ruleForm.sellingPrize" />
        </el-form-item>
        <el-form-item :label="$t('items.label.note')">
            <el-input v-model="ruleForm.note" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">{{ $t('form.submit') }}</el-button>
            <el-button @click="resetForm('ruleForm')">{{ $t('form.reset') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { fetchOne } from '@/api/items'
import { create } from '@/api/items'
import { update } from '@/api/items'
import { default as ItemTypeSelector } from '../item-types/components/ItemTypeSelector'
import { default as ItemUnitSelector } from '../item-units/components/ItemUnitSelector'

export default {
    name: 'CreateItem',
    components: { ItemTypeSelector, ItemUnitSelector },

    data() {
        return {
            loading: true,
            id: null,
            ruleForm: {
                code: '',
                name: '',
                itemTypeId: null,
                itemUnitId: null,
                buyingPrize: null,
                sellingPrize: null,
                note: ''
            },
            rules: {
                code: [
                    {
                        required: true,
                        message: this.$t('items.placeholder.code'),
                        trigger: 'blur'
                    }
                ],
                name: [
                    {
                        required: true,
                        message: this.$t('items.placeholder.name'),
                        trigger: 'blur'
                    }
                ],
                itemTypeId: [
                    {
                        required: true,
                        message: this.$t('items.placeholder.itemTypeId'),
                        trigger: 'change'
                    }
                ],
                itemUnitId: [
                    {
                        required: true,
                        message: this.$t('items.placeholder.itemUnitId'),
                        trigger: 'change'
                    }
                ]
            }
        }
    },

    computed: {
        isEdit() {
            return this.id !== null
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
                this.ruleForm = {
                    id: this.id,
                    code: data.code,
                    name: data.name,
                    itemTypeId: parseInt(data.item_type_id),
                    itemUnitId: parseInt(data.item_unit_id),
                    buyingPrize: data.buying_prize,
                    sellingPrize: data.selling_prize,
                    note: data.note
                }
            })
            .catch(e => {
                console.log(e)
            })
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (!this.isEdit) {
                        create(this.ruleForm)
                            .then(response => {
                                this.$message.success(this.$t('form.created-successfully'))
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    } else {
                        update(this.ruleForm)
                            .then(response => {
                                this.$message.success(this.$t('form.updated-successfully'))
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
        }
    }
}
</script>
