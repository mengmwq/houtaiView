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
        :scroll="{ x: 1000 }"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <span slot="status" slot-scope="text">
          {{ text | statusFilter }}
        </span>
        <span slot="check">
          <a href="#">详情</a>
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
    title: '登录名',
    dataIndex: 'admin_user',
    align: 'center',
    width: 120
  },
  {
    title: '用户名称',
    dataIndex: 'admin_real_name',
    align: 'center',
    width: 110
  },
  {
    title: '所属机构',
    dataIndex: 'suoshujigou',
    align: 'center',
    width: 110
  },
  {
    title: '机构名称',
    dataIndex: 'jigoumingcheng',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '邮箱',
    dataIndex: 'admin_mailbox',
    align: 'center',
    width: 120
  },
  {
    title: '手机号',
    dataIndex: 'admin_mobile',
    align: 'center',
    width: 120
  },
  {
    title: '状态',
    dataIndex: 'shifoukeyong',
    align: 'center',
    width: 60,
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    align: 'center',
    width: 150
  },
  {
    title: '短信余量',
    dataIndex: 'check',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'check' }
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
                admin_user: '500353',
                admin_real_name: '500353',
                shifoukeyong: 1,
                suoshujigou: '000380003',
                jigoumingcheng: '500361',
                admin_mailbox: '',
                admin_mobile: '15532879918',
                createtime: '2019-08-07 09:51:23'
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
  filters: {
    statusFilter (val) {
      console.log(val)
      return val === 1 ? '激活' : '禁止'
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
