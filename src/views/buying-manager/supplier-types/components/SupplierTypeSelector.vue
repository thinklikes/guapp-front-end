<template>
    <el-select
        v-model="selected"
        :placeholder="$t('selector.placeholder')"
        filterable
    >
        <el-option
            v-for="supplierType in options"
            :key="supplierType.id"
            :label="supplierType.label"
            :value="supplierType.id"
        />
    </el-select>
</template>

<el-radio></el-radio>

<script>
import { fetchList } from '@/api/supplier-types'

export default {
    name: 'SupplierTypeSelector',
    props: {
        value: {
            type: Number,
            default: null
        }
    },

    data() {
        return {
            options: [],
            selected: this.value
        }
    },

    watch: {
        value(val) {
            this.selected = val
        },
        selected(val, oldVal) {
            this.$emit('input', val)
            this.$emit('change')
        }
    },

    created() {
        fetchList().then(response => {
            this.options = response.contents
        }).catch(e => {
            console.log(e)
        })
    }
}
</script>
