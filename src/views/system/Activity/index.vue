<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-26 19:28:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\views\system\Activity\index.vue
-->
<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper listT">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="18" :sm="24">
              <a-form-item label="商品SKU编码">
                <a-input
                  v-model="goodsInfoNo"
                  placeholder="请输入正确的sku编码"
                />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary">查询</a-button>
                <a-button style="margin-left: 8px" @click="downloading">下载活动表格</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <a-table  :loading="loading" :columns="columns" :data-source="tableData"  :rowKey="(item,index)=>index"></a-table>

    </a-card>
  </page-header-wrapper>
</template>

<script>

import { GetUserList } from "@/api/system";
const columns = [
  {
    title: "SKU",
    dataIndex: "goodsInfoNo",
    align: "center",
    width: 150,
  },
  {
    title: "商品名称",
    dataIndex: "goodsInfoName",
    align: "center",
  },
  {
    title: "品牌名称",
    dataIndex: "brandName",
    align: "center",
    width: 90,
  },
  {
    title: "禁售状态",
    dataIndex: "auditStatus",
    align: "center",
    width: 100,
  },
  {
    title: "上下架",
    dataIndex: "addedFlag",
    align: "center",
    width: 120,
  },
  {
    title: "活动名称",
    dataIndex: "marketingName",
    align: "center",
  },
  {
    title: "是否暂停",
    dataIndex: "auditReason",
    align: "center",
  },
  {
    title: "开始时间",
    dataIndex: "beginTime",
    align: "center",
  },
  {
    title: "结束时间",
    dataIndex: "endTime",
    align: "center",
  },
  {
    title: "数量",
    dataIndex: "fullCount",
    align: "center",
  },
  {
    title: "折扣",
    dataIndex: "discount",
    align: "center",
  },
];
export default {

  data() {
    return {
      columns,
      tableData:[],
      goodsInfoNo: '',
      loading:true,
    };
  },
 mounted() {
    this.GetQueryList();
  },
  methods:{
    //下载活动列表
    downloading(){
      console.log(1)
    },
    async GetQueryList() {
      const data = {
        goodsInfoNo: this.goodsInfoNo,
        pageNum: 1,
        pageSize: 10,
      };
      const res = await GetUserList(data);
      this.tableData= (res.data.result)
      this.loading =false
    },
  },

};
</script>

<style>
</style>
