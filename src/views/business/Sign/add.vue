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
            <a-cascader :fieldNames="{label: 'name', value: 'code', children: 'children'}" :options="options" expand-trigger="hover" :show-search="{ filter }" placeholder="" />
        </a-form-model-item>
        <a-form-model-item :label="formItem[4].label" :prop="formItem[4].prop">
            <a-textarea v-model="form[formItem[4].model]" />
        </a-form-model-item>
        <a-form-model-item :label="formItem[5].label" :prop="formItem[5].prop">
          <a-textarea  v-model="form[formItem[5].model]" />
        </a-form-model-item>
        <!-- <a-form-model-item>
          <button>取消</button>
          <button @click="handleSubmit">确认</button>
        </a-form-model-item> -->
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
        { label: '单位编号', prop: 'name', model: 'danweibianhao' },
        { label: '收货单位', prop: 'unit', model: 'fahuodanwei' },
        { label: '收货人', prop: 'people', model: 'fahuoren' },
        { label: '收货地址', prop: '', model: 'address' },
        { label: '详细地址', model: 'detailAddress' },
        { label: '备注', prop: '', model: 'beizhu' }
      ],
      rules: {
        name: [
          { required: true, message: '单位编号不能为空', trigger: blur },
          { max: 30, message: '编号最长30个字符', trigger: blur }
        ],
        unit: [
          { required: true, message: '收货单位不能为空', trigger: blur }
        ],
        people: [
          { required: true, message: '收货人不能为空', trigger: blur }
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
