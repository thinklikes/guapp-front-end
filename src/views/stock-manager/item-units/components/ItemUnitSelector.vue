<template>
  <el-select
    v-model="selectedValue"
    placeholder="請選擇"
    filterable
    @change="$emit('change', selectedValue)">
      <el-option
        v-for="unit in options"
        :key="unit.id"
        :label="unit.label"
        :value="unit.id">
      </el-option>
  </el-select>
</template>

<el-radio></el-radio>

<script>
  import {fetchList} from '@/api/item-units'

  export default {
    name: 'ItemUnitSelector',
    props: {
      default: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        options: [],
        selectedValue: null,
      }
    },

    created() {
      this.selectedValue = this.default;

      fetchList().then(response => {
        this.options = response.contents
      }).catch(e => {
        console.log(e);
      });
    },
  }
</script>
