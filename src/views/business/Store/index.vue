<template>
  <div class="container">
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
                    <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
                  </a-space>
                </a-form-model-item>
              </a-form-model>
            </a-col>
            <a-col :md="6" :sm="24">
              <span class="table-page-search-btns" style="float: right">
                <a-button style="margin-left: 8px" type="primary" icon="plus" @click="handleAdd">新增</a-button>
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
      <div class="tree-icon" @click="bindClickTreeIcon">
        <a-icon type="cluster" />
      </div>
    </page-header-wrapper>
    <a-drawer
      title="企业机构目录"
      placement="right"
      :closable="false"
      :visible="isShowDrawer"
      @close="bindCloseDrawer"
    >
      <a-input-search @change="bindSearchTreeNode"></a-input-search>
      <a-tree :show-line="treeOption.showLine" @expand="bindExpand" :expanded-keys="treeOption.expandedKeys" :auto-expand-parent="treeOption.autoExpandParent" :tree-data="treeList" @select="bindSelectTreeNode">
        <template slot="title" slot-scope="{ title }">
          <span v-if="title.indexOf(searchTreeValue) > -1">
            {{ title.substr(0, title.indexOf(searchTreeValue)) }}
            <span style="color: #f50">{{ searchTreeValue }}</span>
            {{ title.substr(title.indexOf(searchTreeValue) + searchTreeValue.length) }}
          </span>
          <span v-else>{{ title }}</span>
        </template>
      </a-tree>
    </a-drawer>
    <a-modal v-model="isShowAddModal" title="添加">
      <add-form></add-form>
    </a-modal>
  </div>
</template>

<script>
import STable from '@/components/Table'
import AddForm from './add'
const columns = [
  {
    title: '库区编码',
    dataIndex: 'gongsimingcheng',
    align: 'center',
    width: 150
  },
  {
    title: '库区名称',
    dataIndex: 'number',
    align: 'center',
    width: 120
  },
  {
    title: '负责人',
    dataIndex: 'kehuleixing',
    align: 'center',
    width: 90
  },
  {
    title: '联系电话',
    dataIndex: 'duanxinbaojing',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '描述',
    dataIndex: 'duanxingshengyushuliang',
    align: 'center',
    width: 120
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    align: 'center',
    width: 120
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
      queryParam: {},
      selectedRowKeys: [],
      selectedRows: [],
      isShowDrawer: false,
      isShowAddModal: false,
      treeOption: {
        autoExpandParent: false,
        showLine: true,
        expandedKeys: []
      },
      searchTreeValue: '',
      treeList: [
        {
          title: '鲜盾管家',
          key: '鲜盾管家',
          scopedSlots: { title: 'title' },
          children: [
            {
              title: '500335',
              key: '500335',
              scopedSlots: { title: 'title' }
            },
            {
              title: '500006',
              key: '500006',
              scopedSlots: { title: 'title' }
            },
            {
              title: '500004',
              key: '500004',
              scopedSlots: { title: 'title' }
            },
            {
              title: '500337',
              key: '500337',
              scopedSlots: { title: 'title' }
            },
            {
              title: '500671',
              key: '500671',
              scopedSlots: { title: 'title' }
            },
            {
              title: '500379',
              key: '500379',
              scopedSlots: { title: 'title' },
              children: [
                { title: '500370', key: '500370', scopedSlots: { title: 'title' } },
                { title: '500374', key: '500374', scopedSlots: { title: 'title' } },
                { title: '500373', key: '500373', scopedSlots: { title: 'title' } }
              ]
            }
          ]
        }
      ],
      dataList: []
    }
  },
  methods: {
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    bindClickTreeIcon () {
      this.isShowDrawer = !this.isShowDrawer
    },
    bindCloseDrawer () {
      this.isShowDrawer = !this.isShowDrawer
    },
    handleAdd () {
      this.isShowAddModal = true
    },
    bindSelectTreeNode (selectedKeys) {
      console.log(selectedKeys)
    },
    bindExpand (expandedKeys) {
      this.$set(this.treeOption, 'autoExpandParent', false)
      this.$set(this.treeOption, 'expandedKeys', expandedKeys)
    },
    getParentKey (key, tree) {
      let parentKey
      for (let i = 0; i < tree.length; i++) {
        const node = tree[i]
        if (node.children) {
          if (node.children.some(item => item.key === key)) {
            parentKey = node.key
          } else if (this.getParentKey(key, node.children)) {
            parentKey = this.getParentKey(key, node.children)
          }
        }
      }
      return parentKey
    },
    bindSearchTreeNode (e) {
      const value = e.target.value
      const expandedKeys = this.dataList.map(item => {
        if (item.title.indexOf(value) > -1) {
          return this.getParentKey(item.key, this.treeList)
        }
        return null
      }).filter((item, i, self) => item && self.indexOf(item) === i)
      this.$set(this.treeOption, 'autoExpandParent', true)
      this.$set(this.treeOption, 'expandedKeys', expandedKeys)
      this.searchTreeValue = value
    },
    generateList (data) {
      for (let i = 0; i < data.length; i++) {
        const node = data[i]
        const key = node.key
        this.dataList.push({ key, title: key })
        if (node.children) {
          this.generateList(node.children)
        }
      }
    }
  },
  created () {
    this.generateList(this.treeList)
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
}
.tree-icon {
  position: fixed;
  z-index: 10;
  top: 340px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: #1890ff;
  color: #fff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
}
</style>
