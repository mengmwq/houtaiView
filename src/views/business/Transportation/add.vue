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
          <a-textarea v-model="form[formItem[2].model]" />
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
        <a-form-model-item :label="formItem[6].label" :prop="formItem[6].prop">
            <a-input v-model="form[formItem[6].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[7].label" :prop="formItem[7].prop">
            <a-input v-model="form[formItem[7].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[8].label" :prop="formItem[8].prop">
          <a-textarea  v-model="form[formItem[5].model]" />
        </a-form-model-item>
        <a-form-model-item :label="formItem[9].label" :prop="formItem[9].prop">
          <a-input v-model="form[formItem[9].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[10].label" :prop="formItem[10].prop">
          <a-input v-model="form[formItem[10].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[11].label" :prop="formItem[11].prop">
          <a-input v-model="form[formItem[11].model]">
            <a-select slot="addonAfter" v-model="form[formItem[12].model]" style="width: 60px;">
              <a-select-option value="1">个</a-select-option>
              <a-select-option value="2">只</a-select-option>
              <a-select-option value="3">箱</a-select-option>
              <a-select-option value="4">瓶</a-select-option>
              <a-select-option value="5">包</a-select-option>
              <a-select-option value="6">盒</a-select-option>
              <a-select-option value="7">袋</a-select-option>
              <a-select-option value="8">捆</a-select-option>
            </a-select>
          </a-input>

        </a-form-model-item>
        <a-form-model-item :label="formItem[13].label" :prop="formItem[13].prop">
            <a-input v-model="form[formItem[13].model]" addon-after="°C"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[14].label" :prop="formItem[14].prop">
          <a-input v-model="form[formItem[14].model]" addon-after="°C"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[15].label" :prop="formItem[15].prop">
          <a-input v-model="form[formItem[15].model]" addon-after="°C"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[16].label" :prop="formItem[16].prop">
          <a-input v-model="form[formItem[16].model]" addon-after="°C"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[17].label" :prop="formItem[17].prop">
          <a-input v-model="form[formItem[17].model]"></a-input>
        </a-form-model-item>
        <a-form-model-item :label="formItem[18].label" :prop="formItem[18].prop">
          <a-input v-model="form[formItem[18].model]"></a-input>
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
      form: {
        shuliangDanwei: '1'
      },
      layout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
      },
      formItem: [
        { label: '运输单号', model: 'danhao' },
        { label: '业务单号', model: 'yewudanhao' },
        { label: '设备编号', model: 'shebeibianhao' },
        { label: '发货人', model: 'fahuoren' },
        { label: '发货单位', model: 'fahuodanwei' },
        { label: '发货地址', model: 'fahuodizhi' },
        { label: '收货人', model: 'shouhuoren' },
        { label: '收货单位', model: 'shouhuodanwei' },
        { label: '收货地址', model: 'shouhuodizhi' },
        { label: '药品名称', model: 'pinming' },
        { label: '药品编号', model: 'bianhao' },
        { label: '药品数量', model: 'yaopinshuliang' },
        { label: '数量单位', model: 'shuliangDanwei' },
        { label: '超高温度报警', model: 'baojingwendu_shangxian' },
        { label: '超低温度报警', model: 'baojingwendu_xiaxian' },
        { label: '超高温度预警', model: 'hegewendu_shangxian' },
        { label: '超低温度预警', model: 'hegewendu_xiaxian' },
        { label: '出发时间', model: 'createtime' },
        { label: '预计到达时间', model: 'yujidaodatime' }
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
