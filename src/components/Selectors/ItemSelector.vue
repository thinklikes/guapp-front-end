<template>
    <el-select
        ref="items"
        v-model="selected"
        filterable
        clearable
        remote
        :placeholder="$t('items.placeholder.name')"
        :remote-method="remoteMethod"
        :loading="loading"
        width="300"
        @clear="cleared"
        @change="changed"
    >
        <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
        />
    </el-select>
</template>

<script>
import { fetchList } from '@/api/items'

export default {
    name: 'ItemSelector',
    props: {
        value: {
            type: [Number, String],
            default: null
        },
        initOptions: {
            type: [Array, Object],
            default: null,
            validator: function(options) {
                let isValid = true
                if (Array.isArray(options)) {
                    options.forEach(option => {
                        isValid = isValid && option.hasOwnProperty('id')
                        isValid = isValid && option.hasOwnProperty('name')
                    })
                } else if (typeof options === 'object') {
                    isValid = isValid && options.hasOwnProperty('id')
                    isValid = isValid && options.hasOwnProperty('name')
                } else {
                    return false
                }

                return isValid
            }
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
        }
    },
    created() {
        if (Array.isArray(this.initOptions)) {
            this.options = this.initOptions
        } else {
            this.options = [this.initOptions]
        }
    },
    methods: {
        remoteMethod(query) {
            this.loading = true
            if (query !== '') {
                const queryItem = {
                    currentPage: null,
                    perPage: null,
                    queryString: query,
                    typeId: null
                }
                fetchList(queryItem).then(response => {
                    this.loading = false
                    this.options = response.contents.data
                }).catch(e => {
                    this.loading = false
                    console.log(e)
                })
            } else {
                this.options = []
            }
        },
        cleared() {
            this.options = []
        },
        changed(val) {
            this.selected = val
            this.$emit('input', val)
            this.$emit('change', val)
        }
    }
}
</script>
