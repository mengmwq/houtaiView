<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-12-18 19:15:33
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
                  v-model="queryParam.goodsInfoNo"
                  placeholder="请输入正确的sku编码"
                  @keyup.enter.native="GetQueryList()"
                />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary" @click="GetQueryList()">查询</a-button>
                <a-button style="margin-left: 8px" @click="export222()"
                  >下载活动列表
                  </a-button
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
import { GetUserList, ExportMarketing } from "@/api/active";
let lastSearch = {};
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
        goodsInfoNo: "",
      },
    };
  },
  mounted() {
    // this.GetQueryList();
  },
  methods: {
      export222() {
      const lastTimeactivity = localStorage.getItem("lastTimeactivity");
      if (lastTimeactivity && lastTimeactivity > new Date().getTime()/1000) {
        //不可以点击
        this.$message.warning("请不要连续下载！等待一分钟");
        return false;
      } // 这里点击的操作
      var url =
        "http://123.57.103.182:8881/execl/exportMarketingForUs?token=5426b177-d0e8-4928-b35b-52ecb471f768";
      window.location.href = url;

      window.localStorage.setItem(
        "lastTimeactivity",
        (new Date().getTime() / 1000) + 60 * 1
      );
    },
    async GetQueryList(flag = true) {
      this.loading = true;
      // const queryParam = {
      //   pageNum: 1, //第几页
      //   pageSize: 10, //每页中显示数据的条数
      //   goodsInfoNo: this.goodsInfoNo,
      // };

      // 点击请求
      if (flag) {
        // 判断有没有
        if (
          this.queryParam.goodsInfoNo == undefined ||
          this.queryParam.goodsInfoNo == ""
        ) {
          this.$message.warning("商品SKU编码不能为空");
          return false;
        }
        this.queryParam.pageNum = 1;
        this.pagination.current = 1;
      }

      lastSearch = this.queryParam;

      const res = await GetUserList(this.queryParam);
      const pagination = { ...this.pagination };
      pagination.total = res.data.totalCount;
      this.tableData = res.data.result;
      this.pagination = pagination;

      this.loading = false;
    },
    handleTableChange(pagination) {
      if (!this.queryParam.goodsInfoNo) {
        this.queryParam.goodsInfoNo = lastSearch.goodsInfoNo;
      }
      this.pagination.current = pagination.current;
      this.pagination.pageSize = pagination.pageSize;
      this.queryParam.pageNum = pagination.current;
      this.queryParam.pageSize = pagination.pageSize;
      this.GetQueryList(false);
    },
  },
};
</script>

<style>
</style>
