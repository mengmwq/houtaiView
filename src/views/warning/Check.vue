<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-row type="flex" justify="space-between">
          <a-col :md="24" :sm="24">
            <a-form-model layout="inline" :model="queryParam">
              <a-form-model-item :colon="false">
                <a-select :default-value="columns[0].dataIndex" slot="label">
                  <template v-for="(item, index) in columns">
                    <a-select-option v-if="index === 0" :key="index" :value="item.dataIndex">{{item.title}}</a-select-option>
                  </template>
                </a-select>
                <a-input v-model="queryParam.value" placeholder="" class="table-page-search-input" />
              </a-form-model-item>
              <a-form-model-item label="时间范围">
                <a-range-picker :show-time="true" />
              </a-form-model-item>
              <a-form-model-item>
                <a-space>
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button @click="() => this.queryParam = {}">重置</a-button>
                </a-space>
              </a-form-model-item>
            </a-form-model>
          </a-col>
          <!-- <a-col :md="3" :sm="24">
            <span class="table-page-search-btns" style="float: right">
              <a-button type="primary" icon="plus" @click="handleAdd">导出</a-button>
            </span>
          </a-col> -->
        </a-row>
      </div>

      <s-table
        ref="table"
        size="middle"
        :rowKey="row => row.id"
        :columns="columns"
        :data="loadData"
        :bordered="true"
        :alert="false"
      >
        <span slot="action" slot-scope="text, record">
          <template>
            <a-button size="small" type="primary" @click="handleEdit(record)" class="table-action-btn">处理</a-button>
          </template>
        </span>
        <span slot="v1" slot-scope="text">
          {{text === 1 ? '保温箱' : text === 2 ? '车载机' : '监控设备'}}
        </span>
        <span slot="range" slot-scope="text, record">
          {{record.v3}}°C~{{record.v2}}°C
        </span>
        <span slot="type" slot-scope="text, record">
          <span v-if="record.b1 > 0">温度1超高温报警 </span>
          <span v-if="record.b2 > 0">温度1超低温报警 </span>
          <span v-if="record.b6 > 0">温度2超高温报警 </span>
          <span v-if="record.b7 > 0">温度2超低温报警 </span>
          <span v-if="record.b5 > 0">电量报警 </span>
          <span v-if="record.b3 > 0">超高湿报警 </span>
          <span v-if="record.b4 > 0">超低湿报警</span>
        </span>
        <span slot="status">
          未处理
        </span>
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import STable from '@/components/Table'
const columns = [
  {
    title: '设备编号',
    dataIndex: 'shebeibianhao',
    align: 'center',
    width: 120
  },
  {
    title: '设备类型',
    dataIndex: 'v1',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'v1' }
  },
  {
    title: '温度1',
    dataIndex: 'temperature01',
    align: 'center',
    width: 80
  },
  {
    title: '温度2',
    dataIndex: 'temperature02',
    align: 'center',
    width: 80
  },
  {
    title: '湿度',
    dataIndex: 'humidity',
    align: 'center',
    width: 80
  },
  {
    title: '正常范围',
    dataIndex: 'range',
    align: 'center',
    width: 120,
    scopedSlots: { customRender: 'range' }
  },
  {
    title: '采集时间',
    dataIndex: 'time',
    align: 'center',
    width: 120
  },
  {
    title: '报警时间',
    dataIndex: 'servicetime',
    align: 'center',
    width: 120
  },
  {
    title: '预警类型',
    dataIndex: 'type',
    align: 'center',
    width: 120,
    scopedSlots: { customRender: 'type' }
  },
  {
    title: '处理状态',
    dataIndex: 'status',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    align: 'center',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  components: {
    STable
  },
  data () {
    return {
      columns,
      loadData: parameter => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              data: [{
                id: 1,
                shebeibianhao: '500381',
                v1: 1,
                temperature01: '26.2',
                temperature02: '0.0',
                humidity: '67.1',
                v3: '10.0',
                v2: '25.0',
                time: '2020-08-31 09:42:35',
                servicetime: '2020-08-31 09:42:59',
                b1: 1
              }
              ],
              pageSize: 10,
              pageNo: 0,
              totalPage: 1,
              totalCount: 1
            })
          })
        })
      },
      queryParam: {}
    }
  },
  methods: {
    handleAdd () {

    }
  }
}
</script>

<style>

</style>
