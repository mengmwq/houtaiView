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
          <a-col :md="6" :sm="24">
            <span class="table-page-search-btns" style="float: right">
              <a-button type="primary" icon="plus" @click="handleAdd">导出</a-button>
            </span>
          </a-col>
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
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import STable from '@/components/Table'
const columns = [
  {
    title: '文件编号',
    dataIndex: 'id',
    align: 'center',
    width: 90
  },
  {
    title: '设备编号',
    dataIndex: 'shebeibianhao',
    align: 'center',
    width: 120
  },
  {
    title: '运单编号',
    dataIndex: 'yundanhao',
    align: 'center',
    width: 90
  },
  {
    title: '下载地址',
    dataIndex: 'url',
    align: 'center',
    width: 100
  },
  {
    title: '操作时间',
    dataIndex: 'time',
    align: 'center',
    width: 140
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
                gongsimingcheng: 'xxxx',
                number: '2222',
                beizhu: '那是一种内在的东西， 他们到达不了，也无法触及的',
                updatedAt: '2018-07-26 00:00:00'
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
