<template>
    <el-select
        ref="main"
        v-model="selected"
        :allow-create="false"
        filterable
        :filter-method="filter"
        default-first-option
        :placeholder="$t('selector.placeholder')"
        @change="changed"
    >
        <el-option
            v-for="item in filteredOptions"
            :key="item.id"
            :label="item.label"
            :value="item.id"
        />
    </el-select>
</template>

<script>

export default {
    name: 'DiscountSelector',
    props: {
        value: {
            type: Number,
            default: null
        }
    },

    data() {
        return {
            options: [
                { id: 1, label: '100%' },
                { id: 0.9, label: '90%' },
                { id: 0.8, label: '80%' },
                { id: 0.7, label: '70%' },
                { id: 0.6, label: '60%' },
                { id: 0.5, label: '50%' },
                { id: 0.4, label: '40%' },
                { id: 0.3, label: '30%' },
                { id: 0.2, label: '20%' },
                { id: 0.1, label: '10%' }
            ],
            filteredOptions: [],
            selected: null
        }
    },

    watch: {
        value(val) {
            console.log(val)
            this.selected = val
        },
        selected(val, oldVal) {
            this.$emit('input', val)
            this.$emit('change')
        }
    },

    created() {
        this.resetOptions()
    },
    methods: {
        changed() {
            this.resetOptions()
        },
        resetOptions() {
            this.filteredOptions = this.options
        },
        filter(val) {
            if (val === '') {
                this.filteredOptions = this.options
                return
            }
            const stringOfValue = val
            val = val < 1 ? parseFloat(val) : parseFloat(val) / 100
            const filtered = this.options.filter(function(item) {
                return item.id === val || item.label === stringOfValue + '%'
            })

            if (filtered.length === 0 && val > 0) {
                const newOption = { id: stringOfValue, label: (Math.round(val * 100)) + '%' }
                filtered.push(newOption)
                this.options.push(newOption)
            }
            this.filteredOptions = filtered
        }
    }
}
</script>
