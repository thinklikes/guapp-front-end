<template>
    <el-form>
        <DiscountSelector
            v-model="discount"
        />
    </el-form>

</template>

<script>
import { default as DiscountSelector } from '@/components/Selectors/DiscountSelector'

export default {
    name: 'SelectorTest',
    components: { DiscountSelector },
    data() {
        return {
            discount: null
        }
    },
    created() {
        this.discount = 1
    },
    methods: {
        changed() {
            console.log(this.discount)
        }
    }
}
</script>
