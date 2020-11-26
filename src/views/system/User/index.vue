<!--
 * @Author: mjk
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-26 23:00:14
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
              <a-form-item label="手机号">
                <a-input
                  v-model="queryParam.gongsimingcheng"
                  placeholder="请输入正确的手机号"
                />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary" @click="GetQueryList">查询</a-button>
                <!-- <a-button style="margin-left: 8px">下载活动表格</a-button> -->
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
    <div style="padding: 20px 0">
      <a-card class="listCb">
        <a-row :gutter="24">
          <a-col :span="4">
            <p>真实姓名：<span>张友帅</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>手机号：<span>150001015778</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>身份证号：<span>141024199708098878</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>是否为员工：<span>是</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>账号状态：<span>启用</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>禁用原因：<span>130</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>是否存在白名单：<span>10</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>当年消费金额：<span>25394</span></p>
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
  mounted() {

  },
  methods: {

  },
};
</script>

<style>
</style>

