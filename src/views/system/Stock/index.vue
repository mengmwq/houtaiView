<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-25 13:16:43
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
                <!-- <a-button style="margin-left: 8px">下载活动表格</a-button> -->
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
    title: "商品编码",
    dataIndex: "SKU",
    align: "center",

  },
  {
    title: "商品名称",
    dataIndex: "goodName",
    align: "center",
  },
  {
    title: "商城库存",
    dataIndex: "scK",
    align: "center",

  },
  {
    title: "未推送库存",
    dataIndex: "wtK",
    align: "center",

  },
   {
    title: "wms总库存",
    dataIndex: "wmsZk",
    align: "center",

  },
  {
    title: "wms锁库存",
    dataIndex: "wmsSk",
    align: "center",

  },
  {
    title: "wms可用库存",
    dataIndex: "wmsKk",
    align: "center",
  }
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
                  scK: "988",
                  wtK: "889",
                  wmsZk: "998",
                  wmsSk: "678",
                  wmsKk: "67"
                },
                  {
                  id: 2,
                  SKU: "10303097489",
                  goodName: "芭比波朗（Bobbi Brown）清透持妆粉底液(0.75号)",
                  scK: "988",
                  wtK: "889",
                  wmsZk: "998",
                  wmsSk: "678",
                  wmsKk: "67"
                },
              ],
              pageSize: 10,
              pageNo: 0,
              totalPage: 1,
              totalCount: 1,

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

