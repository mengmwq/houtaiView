<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-row :gutter="24" type="flex" justify="space-between">
          <a-col :md="18" :sm="24">
            <a-form-model layout="inline" :model="queryParam">
              <a-form-model-item :colon="false">
                <a-select :default-value="columns[0].dataIndex" slot="label">
                  <template v-for="(item, index) in columns">
                    <a-select-option v-if="index === 0 || index === 1 || index === 2" :key="index" :value="item.dataIndex">{{item.title}}</a-select-option>
                  </template>
                </a-select>
                <a-input v-model="queryParam.value" placeholder="" class="table-page-search-input" />
              </a-form-model-item>
              <a-form-model-item label="短信推送报警">
                <a-radio-group button-style="solid" size="small">
                  <a-radio-button>全部</a-radio-button>
                  <a-radio-button value="1">开启</a-radio-button>
                  <a-radio-button value="0">未开启</a-radio-button>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item>
                <a-space>
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button @click="() => this.queryParam = {}">重置</a-button>
                </a-space>
              </a-form-model-item>
            </a-form-model>
          </a-col>
          <a-col :md="6" :sm="24">
            <span class="table-page-search-btns" style="float: right">
              <a-button type="primary" icon="plus" @click="handleAdd">新增</a-button>
              <a-button v-if="selectedRowKeys.length > 0" type="primary" icon="plus" @click="handleAdd">批量删除</a-button>
            </span>
          </a-col>
        </a-row>
      </div>

      <s-table
        ref="table"
        size="middle"
        :rowKey="row => row.id"
        :columns="columns"
        :scroll="{ x: 1500 }"
        :data="loadData"
        :bordered="true"
        :alert="false"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a-button size="small" type="primary" @click="handleEdit(record)" class="table-action-btn">编辑</a-button>
            <a-popconfirm title="确定要删除吗？" @confirm="handleDelete(record)">
              <a-button size="small" type="danger" class="table-action-btn">删除</a-button>
            </a-popconfirm>
          </template>
        </span>
      </s-table>
    </a-card>
    <a-modal v-model="isShowAddModal" title="添加" :width="900" :centered="true">
      <add-form></add-form>
    </a-modal>
  </page-header-wrapper>
</template>

<script>
import STable from '@/components/Table'
import AddForm from './add'
const columns = [
  {
    title: '设备编号',
    dataIndex: 'shebeibianhao',
    align: 'center',
    width: 80
  },
  {
    title: '车牌号',
    dataIndex: 'chepaihao',
    align: 'center',
    width: 80
  },
  {
    title: '业务编号',
    dataIndex: 'yewubianhao',
    align: 'center',
    width: 200
  },
  {
    title: '规格型号',
    dataIndex: 'guigexinghao',
    align: 'center',
    width: 140,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '使用场景',
    dataIndex: 'shebeishiyongchangjing',
    align: 'center',
    width: 90
  },
  {
    title: '所属机构',
    dataIndex: 'suoshujigou',
    align: 'center',
    width: 100
  },
  {
    title: '平台报警',
    dataIndex: 'qidongpingtaibaojing',
    align: 'center',
    width: 90
  },
  {
    title: '上传时间间隔',
    dataIndex: 'fasong_jiange_minute',
    align: 'center',
    width: 110
  },
  {
    title: 'SIM号码',
    dataIndex: 'SIMhaoma',
    align: 'center',
    width: 200
  },
  {
    title: '到期时间',
    dataIndex: 'daoqishijian',
    align: 'center',
    width: 180
  },
  {
    title: '车辆属性',
    dataIndex: 'cheliangshuxing',
    align: 'center',
    width: 90
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 160,
    align: 'center',
    fixed: 'right',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  components: {
    STable,
    AddForm
  },
  data () {
    return {
      columns,
      isShowAddModal: false,
      loadData: parameter => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              data: [{
                id: 1,
                shebeibianhao: '11000032',
                chepaihao: '京AC126',
                yewubianhao: '100000958261(已签收)',
                guigexinghao: 'ZL-TH10TP(温湿版)',
                shebeishiyongchangjing: '保温箱',
                suoshujigou: '法拉电子',
                qidongpingtaibaojing: '否',
                fasong_jiange_minute: '10',
                SIMhaoma: '89860406111700483038',
                daoqishijian: '2018-10-27 00:00:00',
                cheliangshuxing: '冷藏车'
              }],
              pageSize: 10,
              pageNo: 0,
              totalPage: 1,
              totalCount: 1
            })
          })
        })
      },
      queryParam: {},
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  methods: {
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleAdd () {
      this.isShowAddModal = true
    }
  }
}
</script>

<style>

</style>
