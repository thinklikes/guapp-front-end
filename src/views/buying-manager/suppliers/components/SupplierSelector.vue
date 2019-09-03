<template>
    <el-select
        ref="suppliers"
        v-model="selected"
        filterable
        clearable
        remote
        :placeholder="$t('suppliers.placeholder.name')"
        :remote-method="remoteMethod"
        :loading="loading"
        @clear="cleared"
    >
        <el-option
            v-for="supplier in options"
            :key="supplier.id"
            :label="supplier.name"
            :value="supplier.id"
        />
    </el-select>
</template>

<script>
import { fetchList } from '@/api/suppliers'

export default {
    name: 'SupplierSelector',
    props: {
        value: {
            type: [Number, String],
            default: null
        },
        initOptions: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            loading: false,
            options: [],
            selected: this.value
        }
    },
    watch: {
        value(id) {
            this.selected = id
        },
        initOptions(options) {
            this.options.push(options)
        },
        selected(val, oldVal) {
            this.$emit('input', val)
            this.$emit('change')
        }
    },
    methods: {
        remoteMethod(query) {
            if (query !== '') {
                const queryItem = {
                    currentPage: null,
                    perPage: null,
                    queryString: query,
                    typeId: null
                }
                fetchList(queryItem).then(response => {
                    this.options = response.contents.data
                }).catch(e => {
                    console.log(e)
                })
            } else {
                this.options = []
            }
        },
        cleared() {
            console.log(this.selected)
            this.options = []
        }
    }
}
</script>
