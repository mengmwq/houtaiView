<template>
  <a-card :bordered="false" :body-style="{padding: 0}">
      <a-form-model :model="form" :rules="rules" v-bind="layout">
        <a-form-model-item :label="formItem[0].label" :prop="formItem[0].prop">
          <a-input v-model="form[formItem[0].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[1].label" :prop="formItem[1].prop">
          <a-input v-model="form[formItem[1].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[2].label" :prop="formItem[2].prop">
          <a-input v-model="form[formItem[2].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[3].label" :prop="formItem[3].prop">
          <a-input v-model="form[formItem[3].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[4].label" :prop="formItem[4].prop">
          <a-input v-model="form[formItem[3].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[5].label" :prop="formItem[5].prop">
          <a-input v-model="form[formItem[5].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[6].label" :prop="formItem[6].prop">
          <a-textarea  v-model="form[formItem[6].model]" />
        </a-form-model-item>
      </a-form-model>
    </a-card>
</template>

<script>
import options from 'china-division/dist/pca-code.json'
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
        { label: '库区编码', prop: 'name', model: 'kuqubianma' },
        { label: '库区名称', prop: 'unit', model: 'kuqumingcheng' },
        { label: '机构编码', prop: 'people', model: 'jigoubianma' },
        { label: '机构名称', model: 'jigoumingcheng' },
        { label: '负责人', model: 'detailAddress' },
        { label: '联系方式', model: 'fahuorentel' },
        { label: '备注', model: 'beizhu' }
      ],
      rules: {
        name: [
          { required: true, message: '单位编号不能为空', trigger: blur },
          { max: 30, message: '编号最长30个字符', trigger: blur }
        ],
        unit: [
          { required: true, message: '发货单位不能为空', trigger: blur }
        ],
        people: [
          { required: true, message: '发货人不能为空', trigger: blur }
        ]
      },
      options
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
    },
    filter (inputValue, path) {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
    }
  }
}
</script>

<style>

</style>
