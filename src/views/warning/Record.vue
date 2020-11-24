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
                    <a-select-option v-if="index === 0" :key="index" :value="item.dataIndex">{{item.title}}</a-select-option>
                  </template>
                </a-select>
                <a-input v-model="queryParam.value" placeholder="" style="width: 200px" />
              </a-form-model-item>
              <a-form-model-item>
                <span class="table-page-search-btns">
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
                </span>
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
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
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
    title: '操作人',
    dataIndex: 'yonghuming',
    align: 'center',
    width: 120
  },
  {
    title: '操作内容',
    dataIndex: 'caozuoneirong',
    align: 'center',
    width: 90
  },
  {
    title: '预警类型',
    dataIndex: 'yujingneixing',
    align: 'center',
    width: 100
  },
  {
    title: '操作时间',
    dataIndex: 'createtime',
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
                shebeibianhao: '514593',
                yonghuming: 'zhongbaowuliu',
                caozuoneirong: '',
                yujingneixing: '超高温报警',
                createtime: '2020-07-21 14:56:36'
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
