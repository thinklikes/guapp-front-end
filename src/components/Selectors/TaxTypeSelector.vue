<template>
    <el-select
        v-model="selected"
        :placeholder="$t('selector.placeholder')"
    >
        <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.label"
            :value="item.id"
        />
    </el-select>
</template>

<el-radio></el-radio>

<script>

export default {
    name: 'TaxTypeSelector',
    props: {
        value: {
            type: [Number, String],
            default: null
        }
    },

    data() {
        return {
            options: [
                { id: 0, label: '免稅' },
                { id: 1, label: '稅外加' },
                { id: 2, label: '稅內含' }
            ],
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
    }
}
</script>
