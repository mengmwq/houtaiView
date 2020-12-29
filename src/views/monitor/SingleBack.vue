<!--
 * @Author: your name
 * @Date: 2020-12-18 13:56:23
 * @LastEditTime: 2020-12-29 13:21:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \houtaiView\src\views\monitor\SingleBack.vue
-->
<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="centerCon">
        <a-range-picker
          showTime
          class="margin-con1"
          @change="onChange"
          size="large"
        />

        <a-button
          type="primary"
          class="margin-con"
          size="large"
          @click="export222()"
        >
          导出退单数据
        </a-button>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
  data() {
    return {
      beginTime: "",
      endTime: "",
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
      this.beginTime = dateString[0];
      this.endTime = dateString[1];
    },
    export222() {
      const lastTimeSingleBack = localStorage.getItem("lastTimeSingleBack");
      if (lastTimeSingleBack && lastTimeSingleBack > new Date().getTime()/1000) {
        //不可以点击
        this.$message.warning("请不要连续下载！等待一分钟");
        return false;
      } // 这里点击的操作
      var url =
        "http://192.168.20.85:8888/Dataplatform/execl/selectReturnOrder?beginTime=' +beginTime +'&endTime=' + endTime";
      window.location.href = url;

      window.localStorage.setItem(
        "lastTimeSingleBack",
        (new Date().getTime() / 1000) + 60 * 1
      );
    },
  },
};
</script>

<style>
.centerCon {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.margin-con1 {
  margin: 100px 0 50px 0;
}
.margin-con {
  margin-bottom: 50px;
}
</style>
