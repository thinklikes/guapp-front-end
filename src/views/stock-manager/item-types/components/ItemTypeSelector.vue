<template>
  <el-select
    v-model="selected"
    ref="selector"
    :placeholder="$t('selector.placeholder')"
    filterable>
    <template
      v-for="grand in options">
      <el-option-group
        v-if="grand.children === null">
        <el-option
          :key="grand.id"
          :label="grand.label"
          :value="grand.id">
          <span style="float: right">{{ grand.label }}</span>
        </el-option>
      </el-option-group>
      <el-option-group
        v-else
        :key="grand.id"
        :label="grand.label">
        <template
          v-for="parent in grand.children">
          <el-option
            v-if="parent.children === null"
            :key="parent.id"
            :label="parent.label"
            :value="parent.id">
            <span style="float: right">{{ parent.label }}</span>
          </el-option>
          <el-option
            v-else
            v-for="child in parent.children"
            :key="child.id"
            :label="child.label"
            :value="child.id">
            <span style="float: left; color: #8492a6; font-size: 13px">{{ parent.label }}</span>
            <span style="float: right">{{ child.label }}</span>
          </el-option>
        </template>
      </el-option-group>
    </template>
  </el-select>
</template>

<script>
  import {fetchList} from '@/api/item-types'

  export default {
    name: 'ItemTypeSelector',
    props: {
      value: {
        type: Number,
        default: null
      },
    },
    data() {
      return {
        options: [],
        selected: this.value,
      }
    },

    watch: {
      value(val)  {
        this.selected = val;
      },
      selected(val, oldVal)  {
        this.$emit('input', val);
        this.$emit('change');
      }
    },

    created() {
      fetchList().then(response => {
        this.options = response.contents
      }).catch(e => {
        console.log(e);
      });
    },

    methods: {

    }
  }
</script>
