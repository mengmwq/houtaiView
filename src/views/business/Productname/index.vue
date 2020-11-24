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
                    <a-select-option v-if="index === 0 || index === 1" :key="index" :value="item.dataIndex">{{item.title}}</a-select-option>
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
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
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
    title: '编号',
    dataIndex: 'bianhao',
    align: 'center',
    width: 80
  },
  {
    title: '品名',
    dataIndex: 'pinming',
    align: 'center',
    width: 80
  },
  {
    title: '规格',
    dataIndex: 'guige',
    align: 'center',
    width: 80
  },
  {
    title: '生产企业',
    dataIndex: 'shengchanqiye',
    align: 'center',
    width: 100
  },
  {
    title: '生产批号',
    dataIndex: 'shengchanpihao',
    align: 'center',
    width: 100
  },
  {
    title: '所属机构',
    dataIndex: 'suoshujigou',
    align: 'center',
    width: 100
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    align: 'center',
    width: 160
  },
  {
    title: '备注',
    dataIndex: 'beizhu',
    align: 'center',
    width: 100
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
                bianhao: '1',
                pinming: '1',
                guige: '1',
                shengchanqiye: '1',
                shengchanpihao: '1',
                suoshujigou: '000380',
                createtime: '2018-07-26 00:00:00',
                beizhu: '1'
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
    }
  }
}
</script>

<style>

</style>
