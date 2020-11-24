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
          <a-select v-model="form[formItem[3].model]">
            <a-select-option value="0">xx</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :label="formItem[4].label" :prop="formItem[4].prop">
          <a-select v-model="form[formItem[4].model]">
            <a-select-option :value="item.value" v-for="(item, index) in roleList" :key="index">{{item.text}}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :label="formItem[5].label" :prop="formItem[5].prop">
            <a-switch v-model="form[formItem[5].model]" />
            <span>  选中后用户只能浏览页面！</span>
        </a-form-model-item>
        <a-form-model-item :label="formItem[6].label" :prop="formItem[6].prop">
          <a-select v-model="form[formItem[6].model]">
            <a-select-option :value="item.value" v-for="(item, index) in useList" :key="index">{{item.text}}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :label="formItem[7].label" :prop="formItem[7].prop">
          <a-input v-model="form[formItem[7].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[8].label" :prop="formItem[8].prop">
          <a-input v-model="form[formItem[8].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[9].label" :prop="formItem[9].prop">
          <a-input v-model="form[formItem[9].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[10].label" :prop="formItem[10].prop">
          <a-textarea  v-model="form[formItem[10].model]" />
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
        { label: '登录名', prop: 'loginName', model: 'admin_user' },
        { label: '用户名', prop: 'userName', model: 'admin_real_name' },
        { label: '密码', prop: 'password', model: 'admin_pass' },
        { label: '所属机构', prop: '', model: 'suoshujigou' },
        { label: '角色', prop: '', model: 'jiaose' },
        { label: '只是浏览', prop: '', model: 'readonly' },
        { label: '是否可用', prop: '', model: 'shifoukeyong' },
        { label: '邮箱', prop: '', model: 'admin_mailbox' },
        { label: 'qq', model: 'QQ' },
        { label: '手机号', prop: 'mobile', model: 'admin_mobile' },
        { label: '备注', model: 'beizhu' }
      ],
      rules: {
        loginName: [
          { required: true, message: '登录名不能为空', trigger: blur },
          { max: 30, message: '名称最长30个字符', trigger: blur }
        ],
        userName: [
          { required: true, message: '用户名不能为空', trigger: blur },
          { max: 20, message: '名称最长20个字符', trigger: blur }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: blur }
        ],
        mobile: [
          { len: 11, message: '请输入11位手机号', trigger: blur }
        ]
      },
      roleList: [
        { value: 0, text: '普通用户' },
        { value: 1, text: '业务员' }
      ],
      useList: [
        { value: 0, text: '禁用' },
        { value: 1, text: '激活' }
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
