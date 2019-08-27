<template>

    <el-form
        ref="ruleForm"
        v-loading="loading"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
        <el-form-item
            :label="$t('suppliers.label.name')"
            prop="name"
        >
            <el-input
                v-model="ruleForm.name"
            />
        </el-form-item>
        <el-form-item
            :label="$t('suppliers.label.supplierTypeId')"
            prop="supplierTypeId"
        >
            <SupplierTypeSelector
                ref="supplierType"
                v-model="ruleForm.supplierTypeId"
            />
        </el-form-item>
        <el-form-item
            :label="$t('suppliers.label.phone')"
        >
            <el-input
                v-model="ruleForm.phone"
            />
        </el-form-item>
        <el-form-item
            :label="$t('suppliers.label.address')"
        >
            <el-input
                v-model="ruleForm.address"
            />
        </el-form-item>
        <el-form-item
            :label="$t('suppliers.label.facebook')"
            prop="facebook"
        >
            <el-input
                v-model="ruleForm.facebook"
            />
        </el-form-item>
        <el-form-item
            :label="$t('suppliers.label.website')"
            prop="website"
        >
            <el-input
                v-model="ruleForm.website"
            />
        </el-form-item>
        <el-form-item
            :label="$t('suppliers.label.note')"
        >
            <el-input
                v-model="ruleForm.note"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">{{ $t('form.submit') }}</el-button>
            <el-button @click="resetForm('ruleForm')">{{ $t('form.reset') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { fetchOne } from '@/api/suppliers'
import { create } from '@/api/suppliers'
import { update } from '@/api/suppliers'
import { default as SupplierTypeSelector } from '../supplier-types/components/SupplierTypeSelector'

const mainPATH = '/buying-manager/suppliers'

export default {
    name: 'CreateSupplier',
    components: { SupplierTypeSelector },

    data() {
        return {
            loading: true,
            id: null,
            ruleForm: {
                name: '',
                supplierTypeId: null,
                phone: null,
                address: null,
                facebook: null,
                website: null,
                note: ''
            },
            rules: {
                name: [
                    { required: true, message: this.$t('suppliers.placeholder.name'), trigger: 'blur' }
                ],
                supplierTypeId: [
                    { required: true, message: this.$t('suppliers.placeholder.supplierTypeId'), trigger: 'change' }
                ],
                facebook: [
                    { type: 'url', message: this.$t('suppliers.typeError.facebook'), trigger: 'blur' }
                ],
                website: [
                    { type: 'url', message: this.$t('suppliers.typeError.website'), trigger: 'blur' }
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
                    name: data.name,
                    supplierTypeId: parseInt(data.supplier_type_id),
                    phone: data.phone,
                    address: data.address,
                    facebook: data.facebook,
                    website: data.website,
                    note: data.note
                }
            })
            .catch(e => {
                console.log(e)
            })
    },

    methods: {
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
        }
    }
}
</script>

