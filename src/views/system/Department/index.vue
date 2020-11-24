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
                    <a-select-option :key="index" v-if="index === 0" :value="item.dataIndex">{{item.title}}</a-select-option>
                  </template>
                </a-select>
                <a-input v-model="queryParam.value" placeholder="" class="table-page-search-input" />
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
        :data="loadData"
        :bordered="true"
        :alert="false"
        :pagination="{
          showQuickJumper: true,
          showTotal: total => `共 ${total} 条记录`
        }"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>
        <span slot="action" slot-scope="text, record">
          <a-space>
            <a-button size="small" type="primary" @click="handleEdit(record)">编辑</a-button>
            <a-popconfirm title="确定要删除吗？" @confirm="handleDelete(record)">
              <a-button size="small" type="danger">删除</a-button>
            </a-popconfirm>
          </a-space>
        </span>
      </s-table>
    </a-card>

    <a-modal v-model="isShowAddModal" title="添加">
      <add-form></add-form>
    </a-modal>
  </page-header-wrapper>
</template>

<script>
import STable from '@/components/Table'
import AddForm from './add'
const columns = [
  {
    title: '部门名称',
    dataIndex: 'gongsimingcheng',
    align: 'center',
    width: 150
  },
  {
    title: '部门编码',
    dataIndex: 'number',
    align: 'center',
    width: 120
  },
  {
    title: '客户类型',
    dataIndex: 'kehuleixing',
    align: 'center',
    width: 90
  },
  {
    title: '短信报警',
    dataIndex: 'duanxinbaojing',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '短信剩余条数',
    dataIndex: 'duanxingshengyushuliang',
    align: 'center',
    width: 120
  },
  {
    title: '备注',
    dataIndex: 'beizhu',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 160,
    align: 'center',
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
                gongsimingcheng: '500359',
                number: '000380003',
                beizhu: '',
                kehuleixing: '0'
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
    },
    handleDelete () {}
  }
}
</script>

<style>

</style>
