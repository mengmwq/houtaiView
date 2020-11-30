<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-27 18:06:00
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
                  v-model="queryParam.sku"
                  placeholder="请输入正确的sku编码"
                  @keyup.enter.native="GetWarningList()"
                />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary" @click="GetWarningList()"
                  >查询</a-button
                >
                <a-button style="margin-left: 8px"
                  ><a
                    href="http://192.168.2.105:8888//Dataplatform/execl/selectNotInShopSku2Execl"
                    >下载</a
                  ></a-button
                >
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :rowKey="(item, index) => index"
        :pagination="pagination"
        @change="handleTableChange"
      ></a-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { selectNotInShopSkuList, ExportMarketing } from "@/api/device";
const columns = [
  {
    title: "sku编码",
    dataIndex: "sku",
    align: "center",
    width: 150,
  },
  {
    title: "wms商品名称",
    dataIndex: "goodsName",
    align: "center",
  },
];
export default {
  data() {
    return {
      columns,
      tableData: [],

      loading: false,
      pagination: {
        total: 0,
        pageSize: 10, //每页中显示10条数据
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ["10", "20", "50", "100"], //每页中显示的数据
        showTotal: (total) => `共有 ${total} 条数据`, //分页中显示总的数据
      },
      queryParam: {
        pageNum: 1, //第几页
        pageSize: 10, //每页中显示数据的条数
        sku: "",
      },
    };
  },
  mounted() {
    this.GetWarningList();
  },
  methods: {
    //下载活动列表
    async downloading() {
      const res = await ExportMarketing();
      console.log(res);
    },
    async GetWarningList() {
      this.loading = true;
      const queryParam = {
        pageNum: 1, //第几页
        pageSize: 10, //每页中显示数据的条数
        sku: this.sku,
      };

      const res = await selectNotInShopSkuList(this.queryParam);
      const pagination = { ...this.pagination };
      pagination.total = res.data.totalCount;
      this.tableData = res.data.result;
      this.pagination = pagination;
      this.loading = false;
    },
    handleTableChange(pagination) {
      console.log(pagination, "pageNum");
      this.pagination.current = pagination.current;
      this.pagination.pageSize = pagination.pageSize;
      this.queryParam.pageNum = pagination.current;
      this.queryParam.pageSize = pagination.pageSize;
      this.GetWarningList(
        (this.queryParam.pageNum = 1),
        (this.queryParam.pageSize = 10)
      );
    },
  },
};
</script>

<style>
</style>
