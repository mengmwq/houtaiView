<template>
  <a-card :bordered="false" :body-style="{padding: 0}">
    <a-form-model :model="form" :rules="rules" v-bind="layout">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="基本信息">
          <a-row :gutter="24">
            <a-col :md="12" :sm="24">
              <a-form-model-item :label="formItem[0].label" :prop="formItem[0].prop">
                <a-input v-model="form[formItem[0].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[1].label" :prop="formItem[1].prop">
                <a-select v-model="form[formItem[1].model]">
                  <a-select-option value="1">xx</a-select-option>
                  <a-select-option value="2">xxq</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[2].label" :prop="formItem[2].prop">
                <a-input v-model="form[formItem[2].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[3].label" :prop="formItem[3].prop">
                <a-select v-model="form[formItem[3].model]" @change="handleChangeType">
                  <a-select-option v-for="(item, index) in typeList" :key="index" :value="item">{{item}}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[4].label" :prop="formItem[4].prop">
                <a-input v-model="form[formItem[4].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[5].label" :prop="formItem[5].prop">
                <a-select v-model="form[formItem[5].model]">
                  <a-select-option v-for="(item, index) in selectList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[6].label" :prop="formItem[6].prop">
                <a-input v-model="form[formItem[6].model]" disabled></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[7].label" :prop="formItem[7].prop">
                <a-select v-model="form[formItem[7].model]">
                  <a-select-option v-for="(item, index) in sceneList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[8].label" :prop="formItem[8].prop">
                <a-select v-model="form[formItem[8].model]">
                  <a-select-option v-for="(item, index) in gateList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :md="12" :sm="24">
              <a-form-model-item :label="formItem[9].label" :prop="formItem[9].prop">
                <a-select v-model="form[formItem[9].model]">
                  <a-select-option v-for="(item, index) in switchList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[10].label" :prop="formItem[10].prop">
                <a-select v-model="form[formItem[10].model]">
                  <a-select-option v-for="(item, index) in propertyList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[11].label" :prop="formItem[11].prop">
                <a-select v-model="form[formItem[11].model]">
                  <a-select-option v-for="(item, index) in selectList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[12].label" :prop="formItem[12].prop">
                <a-select v-model="form[formItem[12].model]">
                  <a-select-option v-for="(item, index) in orderList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item :label="formItem[13].label" :prop="formItem[13].prop">
                <a-input v-model="form[formItem[13].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[14].label" :prop="formItem[14].prop">
                <a-input v-model="form[formItem[14].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[15].label" :prop="formItem[15].prop">
                <a-input v-model="form[formItem[15].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[16].label" :prop="formItem[16].prop">
                <a-textarea v-model="form[formItem[16].model]" />
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-tab-pane>
        <a-tab-pane key="2" tab="参数设置">
          <a-row :gutter="24">
            <a-col :md="12" :sm="24">
              <a-form-model-item :label="formItem[17].label" :prop="formItem[17].prop">
                <a-date-picker show-time v-model="form[formItem[17].model]" style="width: 100%"></a-date-picker>
              </a-form-model-item>
              <a-form-model-item :label="formItem[18].label" :prop="formItem[18].prop">
                <a-input v-model="form[formItem[18].model]" :disabled="!form[formItem[19].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[19].model]">{{formItem[19].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[20].label" :prop="formItem[20].prop">
                <a-input v-model="form[formItem[20].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[21].label" :prop="formItem[21].prop">
                <a-input v-model="form[formItem[21].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[22].label" :prop="formItem[22].prop">
                <a-input v-model="form[formItem[22].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[23].label" :prop="formItem[23].prop">
                <a-input v-model="form[formItem[23].model]"></a-input>
              </a-form-model-item>
              <a-form-model-item :label="isShow.tt ? formItem[24].label2 : formItem[24].label" :prop="formItem[24].prop">
                <a-input v-model="form[formItem[24].model]" :disabled="!form[formItem[25].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[25].model]">{{formItem[25].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item :label="isShow.tt ? formItem[26].label2 : formItem[26].label" :prop="formItem[26].prop">
                <a-input v-model="form[formItem[26].model]" :disabled="!form[formItem[27].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[27].model]">{{formItem[27].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col :md="12" :sm="24">
              <a-form-model-item :label="isShow.tt ? formItem[28].label2 : formItem[28].label" :prop="formItem[28].prop">
                <a-input v-model="form[formItem[28].model]" :disabled="!form[formItem[29].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[29].model]">{{formItem[29].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item :label="isShow.tt ? formItem[30].label2 : formItem[30].label" :prop="formItem[30].prop">
                <a-input v-model="form[formItem[30].model]" :disabled="!form[formItem[31].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[31].model]">{{formItem[31].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="!isShow.tt" :label="formItem[32].label" :prop="formItem[32].prop">
                <a-input v-model="form[formItem[32].model]" :disabled="!form[formItem[33].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[33].model]">{{formItem[33].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="!isShow.tt" :label="formItem[34].label" :prop="formItem[34].prop">
                <a-input v-model="form[formItem[34].model]" :disabled="!form[formItem[35].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[35].model]">{{formItem[35].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="!isShow.tt" :label="formItem[36].label" :prop="formItem[36].prop">
                <a-input v-model="form[formItem[36].model]" :disabled="!form[formItem[37].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[37].model]">{{formItem[37].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="!isShow.tt" :label="formItem[38].label" :prop="formItem[38].prop">
                <a-input v-model="form[formItem[38].model]" :disabled="!form[formItem[39].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[39].model]">{{formItem[39].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="isShow.tt" :label="formItem[40].label" :prop="formItem[40].prop">
                <a-input v-model="form[formItem[40].model]" :disabled="!form[formItem[41].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[41].model]">{{formItem[41].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="isShow.tt" :label="formItem[42].label" :prop="formItem[42].prop">
                <a-input v-model="form[formItem[42].model]" :disabled="!form[formItem[43].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[43].model]">{{formItem[43].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="isShow.tt" :label="formItem[44].label" :prop="formItem[44].prop">
                <a-input v-model="form[formItem[44].model]" :disabled="!form[formItem[45].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[45].model]">{{formItem[45].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="isShow.tt" :label="formItem[46].label" :prop="formItem[46].prop">
                <a-input v-model="form[formItem[46].model]" :disabled="!form[formItem[47].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[47].model]">{{formItem[47].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[48].label" :prop="formItem[48].prop">
                <a-input v-model="form[formItem[48].model]" :disabled="!form[formItem[49].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[49].model]">{{formItem[49].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item :label="formItem[50].label" :prop="formItem[50].prop">
                <a-input v-model="form[formItem[50].model]" :disabled="!form[formItem[50].model]">
                  <a-checkbox slot="addonAfter" v-model="form[formItem[51].model]">{{formItem[51].label}}</a-checkbox>
                </a-input>
              </a-form-model-item>
              <a-form-model-item v-if="isShow.out" :label="formItem[52].label" :prop="formItem[52].prop">
                <a-select v-model="form[formItem[52].model]">
                  <a-select-option v-for="(item, index) in switchList" :key="index" :value="item.value">{{item.text}}</a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
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
        labelCol: { span: 7 },
        wrapperCol: { span: 17 }
      },
      formItem: [
        { label: '设备编号', prop: 'shebeibianhao', model: 'shebeibianhao' },
        { label: '所属机构', model: 'suoshujigou' },
        { label: '设备名称', model: 'device_name' },
        { label: '规格型号', model: 'guigexinghao' },
        { label: '业务编号', model: 'yewubianhao' },
        { label: '启用业务编号', model: 'qidongyewubianhao' },
        { label: '到期时间', model: 'daoqishijian' },
        { label: '设备使用场景', model: 'shebeishiyongchangjing' },
        { label: '门磁开关', model: 'mencikaiguan' },
        { label: '声音报警开关', model: 'shengyingbaojingkaiguan' },
        { label: '车辆属性', model: 'cheliangshuxing' },
        { label: '启动平台报警', model: 'qidongpingtaibaojing' },
        { label: '打印顺序', model: 'GPS_Start' },
        { label: '打印表头设置', model: 'device_printhead' },
        { label: 'SIM号', model: 'SIMhaoma' },
        { label: '车牌号', model: 'chepaihao' },
        { label: '备注', model: 'beizhu' },
        { label: '开启数据采集时间', model: 'feixingmoshi_kaiqishijian' },
        { label: '飞行模式启动时间', model: 'feixingmoshi_huanxingshijian' },
        { label: '飞行模式开启', model: 'feixingmoshikaiqi' },
        { label: '储存时间间隔', model: 'caiji_jiange_minute' },
        { label: '超温储存时间间隔', model: 'chaowenchucunshijianjiange' },
        { label: '上传时间间隔', model: 'fasong_jiange_minute' },
        { label: '超温上传时间间隔', model: 'chaowenshangchuanshijianjiange' },
        { label: '超高温度报警', model: 'baojingwendu_shangxian', label2: '超高温度1报警' },
        { label: '开启报警', model: 'baojingwendu_shangxian_baojing' },
        { label: '超低温度报警', model: 'baojingwendu_xiaxian', label2: '超低温度1报警' },
        { label: '开启报警', model: 'baojingwendu_xiaxian_baojing' },
        { label: '超高温度预警', model: 'hegewendu_shangxian', label2: '超高温度1预警' },
        { label: '开启报警', model: 'hegewendu_shangxian_baojing' },
        { label: '超低温度预警', model: 'hegewendu_xiaxian', label2: '超低温度1预警' },
        { label: '开启报警', model: 'hegewendu_xiaxian_baojing' },
        { label: '超高湿度报警', model: 'chaogaoshidubaojingfazhi' },
        { label: '开启报警', model: 'chaogaoshidubaojing' },
        { label: '超低湿度报警', model: 'chaodishidubaojingfazhi' },
        { label: '开启报警', model: 'chaodishidubaojing' },
        { label: '超高湿度预警', model: 'chaogaoshiduyujingfazhi' },
        { label: '开启报警', model: 'chaogaoshiduyujing' },
        { label: '超低湿度预警', model: 'chaodishiduyujingfazhi' },
        { label: '开启报警', model: 'chaodishiduyujing' },
        { label: '超高温度2报警', model: 'baojingwendu_two_shangxian' },
        { label: '开启报警', model: 'baojingwendu_two_shangxian_baojing' },
        { label: '超低温度2报警', model: 'baojingwendu_two_xiaxian' },
        { label: '开启报警', model: 'baojingwendu_two_xiaxian_baojing' },
        { label: '超高温度2预警', model: 'hegewendu_two_shangxian' },
        { label: '开启报警', model: 'hegewendu_two_shangxian_baojing' },
        { label: '超低温度2预警', model: 'hegewendu_two_xiaxian' },
        { label: '开启报警', model: 'hegewendu_two_xiaxian_baojing' },
        { label: '电量下限设置', model: 'dianliang_xiaxian' },
        { label: '开启报警', model: 'dianliang_xiaxian_baojing' },
        { label: '推送短信号码', model: 'duanxingtuisong' },
        { label: '短信推送-开启', model: 'duanxingtuisong_baojing' },
        { label: '断电报警', model: 'duandian_baojing' }
      ],
      rules: {
        shebeibianhao: [
          { required: true, message: '设备编号不能为空', trigger: blur },
          { max: 30, message: '编号最长30个字符', trigger: blur }
        ],
        unit: [{ required: true, message: '发货单位不能为空', trigger: blur }],
        people: [{ required: true, message: '发货人不能为空', trigger: blur }]
      },
      typeList: ['LY-TH20DP', 'ZL-TT10TP', 'LY-TH20TP', 'LY-TT20DPG', 'LY-TH30G', 'LY-RTH1000A', 'LY-RTH1000B', 'ZL-TH10TP', 'ZL-WT500', 'LY-RHT1000B(常温版)', 'LY-RHT1000B', 'ZL-TH10TP(单温版)', 'ZL-TH10TP(温湿版)', 'ZL-TH10TPU', 'ZL-TH10TP(双温版)', 'ZL-TH10TPL'],
      selectList: [
        { value: 0, text: '否' },
        { value: 1, text: '是' }
      ],
      switchList: [
        { value: 0, text: '关' },
        { value: 1, text: '开' }
      ],
      orderList: [
        { value: 0, text: '正序' },
        { value: 1, text: '逆序' }
      ],
      propertyList: [
        { value: 0, text: '冷藏车' },
        { value: 1, text: '常温车' }
      ],
      sceneList: [
        { value: 1, text: '通用监控设备' },
        { value: 2, text: '冷藏车' },
        { value: 4, text: '冷库' },
        { value: 5, text: '集装箱' },
        { value: 6, text: '冷(冰)柜' }
      ],
      gateList: [
        { value: 0, text: '未安装' },
        { value: 1, text: '已安装' }
      ],
      isShow: {
        out: false,
        tt: false
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
    },
    handleChangeType (value) {
      if (value.includes('TT') || value.includes('双温')) {
        this.$set(this.isShow, 'tt', true)
      } else {
        this.$set(this.isShow, 'tt', false)
      }
      if (value === 'ZL-TH10TPL') {
        this.$set(this.isShow, 'out', true)
      } else {
        this.$set(this.isShow, 'out', false)
      }
    },
    initDefaultVal () {
      this.form = {
        shengyingbaojingkaiguan: 1,
        cheliangshuxing: 0,
        qidongpingtaibaojing: 1,
        GPS_Start: 0,
        qidongyewubianhao: 0,
        device_name: '温控设备',
        shebeishiyongchangjing: 1,
        mencikaiguan: 0,
        feixingmoshi_huanxingshijian: 0,
        caiji_jiange_minute: 5,
        chaowenchucunshijianjiange: 2,
        fasong_jiange_minute: 5,
        chaowenshangchuanshijianjiange: 2,
        baojingwendu_shangxian: 8,
        baojingwendu_xiaxian: 0,
        hegewendu_shangxian: 6,
        hegewendu_xiaxian: 2,
        chaogaoshidubaojingfazhi: 95,
        chaodishidubaojingfazhi: 5,
        chaogaoshiduyujingfazhi: 90,
        chaodishiduyujingfazhi: 10,
        dianliang_xiaxian: 15,
        baojingwendu_two_shangxian: 8,
        baojingwendu_two_xiaxian: 8,
        hegewendu_two_shangxian: 6,
        hegewendu_two_xiaxian: 6
      }
    }
  },
  mounted () {
    this.initDefaultVal()
  }
}
</script>

<style>
</style>
