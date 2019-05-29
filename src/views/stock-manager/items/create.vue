<template>

  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm">
    <el-form-item
      label="品項代碼"
      prop="code">
      <el-input
        v-model="ruleForm.code">

      </el-input>
    </el-form-item>
    <el-form-item
      label="品項名稱"
      prop="name">
      <el-input
        v-model="ruleForm.name">

      </el-input>
    </el-form-item>
    <el-form-item
      label="品項類型"
      prop="itemTypeId">
      <ItemTypeSelector
        v-model="ruleForm.itemTypeId"
        @>
      </ItemTypeSelector>
    </el-form-item>
    <el-form-item
      label="品項單位"
      prop="itemUnitId">
      <ItemUnitSelector
        :default="ruleForm.itemUnitId">
      </ItemUnitSelector>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {default as ItemTypeSelector} from '../item-types/components/ItemTypeSelector'
  import {default as ItemUnitSelector} from '../item-units/components/ItemUnitSelector'

  export default {
    components: {ItemTypeSelector, ItemUnitSelector},
    data() {
      return {
        ruleForm: {
          code: '',
          name: '',
          itemTypeId: null,
          itemUnitId: null,
        },
        rules: {
          code: [
            {required: true, message: '請輸入品項代碼', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '請輸入品項名稱', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          itemTypeId: [
            {required: true, message: '請選擇品項類型', trigger: 'change'}
          ],
          itemUnitId: [
            {required: true, message: '請選擇品項單位', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
