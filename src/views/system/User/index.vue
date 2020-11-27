<!--
 * @Author: mjk
 * @Date: 2020-11-25 11:10:16
 * @LastEditTime: 2020-11-27 14:02:53
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
                  v-model="queryParam.mobile"
                  placeholder="请输入正确的手机号"
                  @keyup.enter.native="GetUserList()"
                />
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <span
                class="table-page-search-submitButtons"
                style="float: right"
              >
                <a-button type="primary" @click="GetUserList()" >查询</a-button>
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
        <a-row :gutter="24">
          <a-col :span="4">
            <p>真实姓名：<span>{{UserData.customerName}}</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>手机号：<span>{{UserData.customerAccount}}</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>身份证号：<span>{{UserData.idCardNumber}}</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>是否为员工：<span>{{UserData.customerCategory}}</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>账号状态：<span>{{UserData.customerStatus}}</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>禁用原因：<span>{{UserData.forbidReason||'暂无'}}</span></p>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="4">
            <p>是否存在白名单：<span>{{UserData.whiteListFlag}}</span></p>
          </a-col>
          <a-col :span="12" :offset="2">
            <p>当年消费金额：<span>{{UserData.totalPrice}}</span></p>
          </a-col>
        </a-row>
      </a-card>
    </div>
     </a-spin>
  </page-header-wrapper>
</template>

<script>
import { GetUserData } from "@/api/user";
export default {
  data() {
    return {
      queryParam: {},
       showDataList:false,
       loader:false,
       UserData:{}
    };
  },
  mounted() {

  },
  methods: {
    async GetUserList() {
      // if (this.mobile == undefined) {
      //   this.$message.warning("手机号不能为空");
      //   return false
      // }
       this.showDataList=true;
       this.loader =true

      const queryParam ={

        mobile: this.mobile,
      }

      const res = await GetUserData(this.queryParam);


      this.UserData = res.data.result;
      this.loader =false

    },

  },
};
</script>

<style>
</style>

