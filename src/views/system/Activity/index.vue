<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-25 13:48:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\views\system\Activity\index.vue
-->
<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="18" :sm="24">
              <a-form-item label="商品SKU编码">
                <a-input
                  v-model="queryParam.gongsimingcheng"
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
                <a-button style="margin-left: 8px">下载活动表格</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <s-table
        ref="table"
        size="middle"
        :columns="columns"
         :rowKey="row => row.id"
        :data="loadData"
        :bordered="true"
        :alert="false"
        :pagination="{
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 条记录`,
        }"
      >
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import STable from "@/components/Table";
const columns = [
  {
    title: "SKU",
    dataIndex: "SKU",
    align: "center",
    width: 150,
  },
  {
    title: "商品名称",
    dataIndex: "goodName",
    align: "center",
  },
  {
    title: "品牌名称",
    dataIndex: "pinpai",
    align: "center",
    width: 90,
  },
  {
    title: "禁售状态",
    dataIndex: "jinshou",
    align: "center",
    width: 100,
  },
  {
    title: "上下架",
    dataIndex: "sxj",
    align: "center",
    width: 120,
  },
  {
    title: "活动名称",
    dataIndex: "activeName",
    align: "center",
  },
  {
    title: "是否暂停",
    dataIndex: "isZan",
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
    dataIndex: "num",
    align: "center",
  },
  {
    title: "折扣",
    dataIndex: "zhekou",
    align: "center",
  },
];
export default {
  components: {
    STable,
  },
  data() {
    return {
      columns,
      loadData: (parameter) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              data: [
                {
                  id: 1,
                  SKU: "10303097489",
                  goodName: "芭比波朗（Bobbi Brown）清透持妆粉底液(0.75号)",
                  pinpai: "芭比波朗",
                  jinshou: "审核通过",
                  sxj: "上架",
                  activeName: "1110，BB，一件8折，两件7折",
                  isZan: "暂停",
                  beginTime: "2020-11-10 21:00:00",
                  endTime: "2020-11-16 23:59:00",
                  num: "10",
                  zhekou: "0.8",
                },
                  {
                  id: 2,
                  SKU: "10303097489",
                  goodName: "芭比波朗（Bobbi Brown）清透持妆粉底液(0.75号)",
                  pinpai: "芭比波朗",
                  jinshou: "审核通过",
                  sxj: "上架",
                  activeName: "1110，BB，一件8折，两件7折",
                  isZan: "暂停",
                  beginTime: "2020-11-10 21:00:00",
                  endTime: "2020-11-16 23:59:00",
                  num: "10",
                  zhekou: "0.8",
                },
              ],
              pageSize: 10,
              pageNo: 0,
              totalPage: 1,
              totalCount: 100,

            });
          });
        });
      },
      queryParam: {},
    };
  },
};
</script>

<style>
</style>
