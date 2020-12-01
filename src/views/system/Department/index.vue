<!--
 * @Author: mjk
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-12-01 18:12:57
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
              <a-form-item label="订单号">
                <a-input
                  v-model="queryParam.orderNo"
                  placeholder="请输入正确的订单号号"
                  @keyup.enter.native="GetorderNoData()"
                />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary" @click="GetorderNoData()"
                  >查询</a-button
                >
                <!-- <a-button style="margin-left: 8px">下载活动表格</a-button> -->
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
    <div v-show="showDepartmentList">
      <a-spin :spinning="loader">
        <div style="padding: 20px 0">
          <a-card class="listCb">
            <a-tabs>
              <a-tab-pane key="1" tab="订单详情"> </a-tab-pane>
            </a-tabs>
            <div style="background: #fdf2f2; padding: 20px 0">
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    订单号：<span>{{ DepartmentData._id }}</span>
                  </p>
                </a-col>
                <a-col :span="7">
                  <p>
                    发货状态：<span>{{ tradeState.deliverStatus }}</span>
                    <!-- 审核状态：<span>{{ tradeState.auditState }}</span> -->
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    购买人姓名：<span>{{ buyer.name }}</span>
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    流程状态：<span>{{ tradeState.flowState }}</span>
                  </p>
                </a-col>
                <a-col :span="7">
                  <p>
                    订单推送WMS状态：<span>{{ tradeState.wmsTradeState }}</span>
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    账号：<span>{{ buyer.account }}</span>
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    订单来源：<span>{{ DepartmentData.orderSource }}</span>
                  </p>
                </a-col>
                <a-col :span="7">
                  <p>
                    wms订单状态：<span>{{
                      DepartmentData.wmsOrderStatus
                    }}</span>
                    <!-- 支付状态：<span>{{ tradeState.payState }}</span> -->
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    手机号：<span>{{ buyer.phone }}</span>
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    <!-- wms订单状态：<span>{{
                      DepartmentData.wmsOrderStatus
                    }}</span> -->
                    创建时间：<span>{{ tradeState.createTimeStr }}</span>
                  </p>
                </a-col>
                <a-col :span="7">
                  <p>
                    推送支付单状态：<span>{{
                      DepartmentData.payOrderPushStatus
                    }}</span>
                    <!-- 订单推送WMS状态：<span>{{ tradeState.wmsTradeState }}</span> -->
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    身份证号：<span>{{ buyer.idCard }}</span>
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    支付时间：<span>{{ tradeState.payTimeStr }}</span>
                    <!-- 订单来源：<span>{{ DepartmentData.orderSource }}</span> -->
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    推送支付单错误信息：<span>{{
                      DepartmentData.payPushErrorMsg
                    }}</span>
                    <!-- 发货状态：<span>{{ tradeState.deliverStatus }}</span> -->
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    商城支付状态：<span>{{ tradeState.payState }}</span>
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    cds清单返回值：<span>{{
                      DepartmentData.cdsReturnStatus
                    }}</span>
                    <!-- 创建时间：<span>{{ tradeState.createTimeStr }}</span> -->
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    微信支付状态：<span>{{
                      DepartmentData.weChatTradeState
                    }}</span>
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    支付时间：<span>{{ tradeState.payTimeStr }}</span>
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    微信支付状态：<span>{{
                      DepartmentData.weChatTradeState
                    }}</span>
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    cds返回值详情：<span>{{
                      DepartmentData.cdsReturnInfo
                    }}</span>
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    微信支付流水号：<span>{{
                      DepartmentData.transactionId
                    }}</span>
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    订单推送给WMS的次数：<span>{{
                      tradeState.wmsPushCount
                    }}</span>
                  </p>
                </a-col>
              </a-row>
              <a-row :gutter="24">
                <a-col :span="7" :offset="2">
                  <p>
                    订单备注：<span>{{ DepartmentData.buyerRemark }}</span>
                  </p>
                </a-col>
                <a-col :span="8">
                  <p>
                    作废原因：<span>{{ tradeState.obsoleteReason }}</span>
                  </p>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </div>
        <a-table
          :loading="loading"
          bordered
          :columns="columns"
          :pagination="false"
          :data-source="tableData"
          :rowKey="(item, index) => index"
        ></a-table>

        <div style="padding: 20px 0" class="listspan">
          <a-card>
            <a-row :gutter="24">
              <a-col :span="18">
                <a-row
                  :gutter="24"
                  style="  flex-wrap: nowrap; white-space: nowrap"
                >
                  <a-col :span="5">
                    <span
                      >收货人名称：<strong>{{ consignee.name }}</strong></span
                    ></a-col
                  >
                  <a-col :span="4">
                    <span
                      >省名称：<strong>{{
                        consignee.provinceName
                      }}</strong></span
                    ></a-col
                  >
                  <a-col :span="4"
                    ><span
                      >市名：<strong>{{ consignee.cityName }}</strong></span
                    ></a-col
                  >
                  <a-col :span="5">
                    <span
                      >地区名：<strong>{{ consignee.areaName }}</strong></span
                    ></a-col
                  >
                </a-row>
              </a-col>
              <a-col :span="6">
                <a-row
                  :gutter="24"
                  style="flex-wrap: nowrap; white-space: nowrap"
                >
                  <a-col :span="12"
                    ><span
                      >商品总金额：<strong>{{
                        tradePrice.goodsPrice
                      }}</strong></span
                    ></a-col
                  >
                  <a-col :span="12">
                    <span
                      >原始金额：<strong>{{
                        tradePrice.originPrice
                      }}</strong></span
                    ></a-col
                  >
                </a-row>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="18">
                <a-row
                  :gutter="24"
                  style="flex-wrap: nowrap; white-space: nowrap"
                >
                  <a-col :span="5">
                    <span
                      >收货人电话：<strong>{{ consignee.phone }}</strong></span
                    >
                  </a-col>

                  <a-col :span="4">
                    <span
                      >省代码：<strong>{{ consignee.provinceId }}</strong></span
                    >
                  </a-col>
                  <a-col :span="4">
                    <span
                      >市代码：<strong>{{ consignee.cityId }}</strong></span
                    >
                  </a-col>
                  <a-col :span="5">
                    <span
                      >地区代码：<strong>{{ consignee.areaId }}</strong></span
                    >
                  </a-col>
                </a-row>
              </a-col>
              <a-col :span="6">
                <a-row
                  :gutter="24"
                  style="flex-wrap: nowrap; white-space: nowrap"
                >
                  <a-col :span="12">
                    <span
                      >税费金额<strong>{{ tradePrice.taxPrice }}</strong></span
                    >
                  </a-col>
                  <a-col :span="12"
                    ><span
                      >订单应付金额：<strong>{{
                        tradePrice.totalPrice
                      }}</strong></span
                    ></a-col
                  >
                </a-row>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="18">
                <span
                  >详细地址(包含省市区)：<strong>{{
                    consignee.detailAddress
                  }}</strong></span
                >
              </a-col>
              <a-col :span="6">
                <a-row
                  :gutter="24"
                  style="flex-wrap: nowrap; white-space: nowrap"
                >
                  <a-col :span="12">
                    <span
                      >优惠金额：<strong>{{
                        tradePrice.discountsPrice
                      }}</strong></span
                    ></a-col
                  >
                  <a-col :span="12">
                    <span
                      >订单实际支付金额：<strong>{{
                        tradePrice.totalPayCash
                      }}</strong></span
                    ></a-col
                  >
                </a-row>
              </a-col>
            </a-row>
          </a-card>
        </div>
        <div>
          <a-card>
            <h1
              style="
                font-weight: 600;
                color: #d31012;
                height: 28px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
              "
            >
              操作记录
            </h1>
            <a-table
              :loading="loading"
              bordered
              :columns="tradeLogs"
              :pagination="false"
              :data-source="tradeEventLogsData"
              :rowKey="(item, index) => index"
            ></a-table>
          </a-card>
        </div>
      </a-spin>
    </div>
  </page-header-wrapper>
</template>

<script>
import { selectOrderDetailByOrderNo } from "@/api/department";
const columns = [
  {
    title: "商品名称",
    dataIndex: "skuName",
    align: "center",
  },
  {
    title: "SKU编码",
    dataIndex: "skuNo",
    align: "center",
  },
  {
    title: "商品条形码",
    dataIndex: "barCode",
    align: "center",
  },
  {
    title: "商品重量",
    dataIndex: "goodsWeight",
    align: "center",
  },
  {
    title: "商品体积",
    dataIndex: "goodsCubage",
    align: "center",
  },
  {
    title: "数量",
    dataIndex: "num",
    align: "center",
  },
  {
    title: "单位",
    dataIndex: "unit",
    align: "center",
  },
  {
    title: "商品原价",
    dataIndex: "originalPrice",
    align: "center",
  },
  {
    title: "平摊小计",
    dataIndex: "splitPrice",
    align: "center",
  },
  {
    title: "税费",
    dataIndex: "taxPrice",
    align: "center",
  },
];
const tradeLogs = [
  {
    title: "事件类型",
    dataIndex: "eventType",
    align: "center",
  },
  {
    title: "事件详情",
    dataIndex: "eventDetail",
    align: "center",
  },
  {
    title: "事件创建时间",
    dataIndex: "eventTimeStr",
    align: "center",
  },
];
export default {
  data() {
    return {
      queryParam: {},
      columns,
      tradeLogs,
      showDepartmentList: false,
      loader: false,
      loading: false,
      tableData: [],
      tradeEventLogsData: [],
      DepartmentData: {},
      tradeState: {},
      buyer: {},
      consignee: {},
      tradePrice: {},
    };
  },
  mounted() {},
  methods: {
    async GetorderNoData() {
      if (
        this.queryParam.orderNo == undefined ||
        this.queryParam.orderNo == ""
      ) {
        this.$message.warning("订单号不能为空");
        return false;
      }

      const queryParam = {
        orderNo: this.orderNo,
      };

      const res = await selectOrderDetailByOrderNo(this.queryParam);
      this.showDepartmentList = true;
      this.loader = true;
      this.DepartmentData = res.data.result;
      this.tradeState = res.data.result.tradeState || {};
      this.buyer = res.data.result.buyer || {};
      this.consignee = res.data.result.consignee || {};
      this.tradePrice = res.data.result.tradePrice || {};
      this.tableData = res.data.result.tradeItems || [];
      this.tradeEventLogsData = res.data.result.tradeEventLogs || [];

      this.loader = false;

      this.queryParam.orderNo = "";
    },
  },
};
</script>

<style scope>
.listspan span {
  margin-right: 20px;
}
.listspan .ant-row {
  margin-bottom: 10px;
}
</style>

