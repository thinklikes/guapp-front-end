<template>

    <el-form
        ref="ruleForm"
        v-loading="loading"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
    >
        <el-form-item
            :label="$t('warehouses.label.code')"
            prop="code"
        >
            <el-input
                v-model="ruleForm.code"
            />
        </el-form-item>
        <el-form-item
            :label="$t('warehouses.label.name')"
            prop="name"
        >
            <el-input
                v-model="ruleForm.name"
            />
        </el-form-item>
        <el-form-item
            :label="$t('warehouses.label.comment')"
        >
            <el-input
                v-model="ruleForm.comment"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">{{ $t('form.submit') }}</el-button>
            <el-button @click="resetForm('ruleForm')">{{ $t('form.reset') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { fetchOne } from '@/api/warehouses'
import { create } from '@/api/warehouses'
import { update } from '@/api/warehouses'

const mainPATH = '/stock-manager/warehouses'

export default {
    name: 'CreateWarehouse',
    data() {
        return {
            loading: true,
            id: null,
            ruleForm: {},
            rules: {
                code: [
                    { required: true, message: this.$t('warehouses.placeholder.code'), trigger: 'blur' }
                ],
                name: [
                    { required: true, message: this.$t('warehouses.placeholder.name'), trigger: 'blur' }
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
                    comment: data.comment
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
