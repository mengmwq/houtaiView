<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-27 14:01:53
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
                  v-model="queryParam.sku"
                  placeholder="请输入正确的sku编码"
                   @keyup.enter.native="GetStockList()"
                />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary" @click="GetStockList()">查询</a-button>
                <!-- <a-button style="margin-left: 8px">下载活动表格</a-button> -->
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
    <a-spin :spinning="loader">
    <div style="padding: 20px 0" v-show="showDataList">
      <a-card class="listCb">
        <a-row :gutter="24" >
          <a-col :span="4">
            <p>商品编码：<span>{{StockData.sku}}</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>商品名称：<span>{{StockData.goodName}}</span></p>
          </a-col>
        </a-row>
         <a-row :gutter="24">
          <a-col :span="4">
            <p>商城库存：<span>{{StockData.shopStock}}</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>未推送库存：<span>{{StockData.notPushStock}}</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>wms总库存：<span>{{StockData.wmsTotalStock}}</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>wms可用库存：<span>{{StockData.wmsAvailableStock}}</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>wms锁库存：<span>{{StockData.wmsLockStock}}</span></p>
          </a-col>

        </a-row>
      </a-card>
    </div>
    </a-spin>
  </page-header-wrapper>
</template>

<script>
import { GetStockData } from "@/api/stock";
export default {
  data() {
    return {
      StockData:{},
      showDataList:false,
       loader:false,
      queryParam: {
         sku: "",
      },

    };
  },
  methods:{
     async GetStockList() {
       console.log(this.sku,'hg')
      //  if (this.sku == undefined) {
      //   this.$message.warning("商品SKU编码不能为空");
      //   return false
      // }
       this.showDataList=true;
       this.loader =true

      const queryParam ={

        sku: this.sku,
      }

      const res = await GetStockData(this.queryParam);


      this.StockData = res.data.result;
      this.loader =false

    },
  }
};
</script>

<style>

</style>

