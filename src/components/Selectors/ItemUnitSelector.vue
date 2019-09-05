<template>
    <el-select
        v-model="selected"
        :placeholder="$t('selector.placeholder')"
        filterable
    >
        <el-option
            v-for="unit in options"
            :key="unit.id"
            :label="unit.label"
            :value="unit.id"
        />
    </el-select>
</template>

<script>
import { fetchList } from '@/api/item-units'

export default {
    name: 'ItemUnitSelector',
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
