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
            <a-input v-model="form[formItem[4].model]"></a-input>
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
        { label: '编号', prop: 'name', model: 'bianhao' },
        { label: '品名', prop: '', model: 'pinming' },
        { label: '规格', prop: '', model: 'guige' },
        { label: '生产企业', prop: '', model: 'shengchanqiye' },
        { label: '生产批号', prop: '', model: 'shengchanpihao' },
        { label: '备注', prop: '', model: 'beizhu' }
      ],
      rules: {
        name: [
          { required: true, message: '编号不能为空', trigger: blur },
          { max: 30, message: '编号最长30个字符', trigger: blur }
        ]
      }
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
