<!--
 * @Author: your name
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-26 14:46:32
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
    </a-card>
    <div style="padding: 20px 0">
      <a-card class="listCb">
        <a-row :gutter="24" >
          <a-col :span="4">
            <p>商品编码：<span>103445</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>商品名称：<span>芭比波朗（Bobbi Brow）好high会更好</span></p>
          </a-col>
        </a-row>
         <a-row :gutter="24">
          <a-col :span="4">
            <p>商城库存：<span>120</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>未推送库存：<span>10</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>wms总库存：<span>150</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>wms可用库存：<span>130</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>wms锁库存：<span>10</span></p>
          </a-col>

        </a-row>
      </a-card>
    </div>
  </page-header-wrapper>
</template>

<script>
export default {
  data() {
    return {
      queryParam: {},
    };
  },
};
</script>

<style>

</style>

