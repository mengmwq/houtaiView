<template>
  <a-card :bordered="false" :body-style="{padding: 0}">
      <a-form-model :model="form" :rules="rules" v-bind="layout">
        <a-form-model-item :label="formItem[0].label" :prop="formItem[0].prop">
          <a-input v-model="form[formItem[0].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[1].label" :prop="formItem[1].prop">
          <a-select v-model="form[formItem[1].model]">
            <a-select-option value="0">xx</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :label="formItem[2].label" :prop="formItem[2].prop">
          <a-select v-model="form[formItem[2].model]">
            <a-select-option :value="item.value" v-for="(item, index) in typeList" :key="index">{{item.text}}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :label="formItem[3].label" :prop="formItem[3].prop">
          <a-textarea  v-model="form[formItem[3].model]" />
        </a-form-model-item>
        <!-- <a-form-model-item>
          <button>取消</button>
          <button @click="handleSubmit">确认</button>
        </a-form-model-item> -->
      </a-form-model>
    </a-card>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      form: {},
      layout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
      },
      formItem: [
        { label: '部门名称', prop: 'name', model: 'gongsimingcheng' },
        { label: '上级部门', prop: '', model: 'number' },
        { label: '状态', prop: '', model: 'kehuleixing' },
        { label: '备注', prop: '', model: 'beizhu' }
      ],
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: blur },
          { max: 30, message: '名称最长30个字符', trigger: blur }
        ]
      },
      typeList: [
        { value: 0, text: '代理' },
        { value: 1, text: '客户' }
      ]
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style>

</style>
