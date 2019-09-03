<template>

    <el-form
        ref="ruleForm"
        v-loading="loading"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
        <div slot="header" class="clearfix">
            <span>{{ ruleForm.code }}</span>
        </div>
        <el-form-item
            :label="$t('suppliers.label.name')"
            prop="supplierId"
        >
            <SupplierSelector
                ref="suppliers"
                v-model="ruleForm.supplierId"
                :init-options="initOptions"
                @change="changed"
            />
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
import { default as SupplierSelector } from '../suppliers/components/SupplierSelector'

const mainPATH = '/buying-manager/purchase-orders'

export default {
    name: 'CreatePurchaseOrder',
    components: { SupplierSelector },

    data() {
        return {
            loading: true,
            id: null,
            initOptions: {},
            ruleForm: {
                supplierId: null
            },
            rules: {
                supplierId: [
                    { type: 'number', message: this.$t('suppliers.placeholder.name'), trigger: 'change' }
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
                this.initOptions = data.supplier
                this.ruleForm = {
                    id: this.id,
                    code: data.code,
                    supplierId: data.supplier_id
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
        changed() {
            console.log(this.ruleForm.supplierId)
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
        }
    }
}
</script>

