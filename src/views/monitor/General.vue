<!--
 * @Author: your name
 * @Date: 2020-11-30 11:26:18
 * @LastEditTime: 2020-12-21 11:58:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \houtaiView\src\views\monitor\General.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-11-27 18:18:59
 * @LastEditTime: 2020-12-18 11:00:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\views\monitor.vue
-->
<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper listT">
        <a-row :gutter="24">
          <a-col style="margin-bottom: 20px">
            <a-button
              ref="downBtn"
              type="primary"
              icon="download"
              href="http://192.168.20.85:8888/Dataplatform/execl/downRePushPaymentOrder"
              download
              @click="downLoadFn"
              :disabled="isDisabled"
            >
              下载支付单模板</a-button
            >
          </a-col>
          <a-col style="margin-bottom: 20px">
            <a-row>
              <a-col :span="2">
                <a-upload
                  name="file"
                  :file-list="fileList"
                  :multiple="false"
                  :remove="handleRemove"
                  :headers="headers"
                  :before-upload="beforeUpload"
                >
                  <a-button> <a-icon type="upload" /> 重推支付单</a-button>
                </a-upload>
              </a-col>

              <!-- 没有选择文件禁用按钮 -->
              <a-col :span="12">
                <a-button
                  :disabled="!fileList.length"
                  type="dashed"
                  @click="uploadFile"
                  >确定</a-button
                >
              </a-col>
            </a-row>
          </a-col>
          <a-col>
            <a-button type="primary" @click="restWsm()"> 重推wms</a-button>
          </a-col>
        </a-row>
      </div>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { uploadData, rePushPaymentOrder } from "@/api/monitor";
export default {
  data() {
    return {
      headers: {},
      /* 是否禁用下载 - 默认可以下载 */
      isDisabled: false,
      /* 数组 */
      fileList: [],
    };
  },
  mounted() {},
  methods: {
    async restWsm() {
      const res = await rePushPaymentOrder({});
      console.log(res, "ufslhE;FJHGFJLBHKG");
    },
    /* uploadFile */
    async uploadFile() {
      let fromData = new FormData();

      if (this.fileList.length) {
        fromData.append("file", this.fileList[0]);
      }

      const uploadBack = await uploadData(fromData);

      let blob = new Blob([uploadBack.data], {
        type: "application/x-xls;charset=utf-8",
      });
      let file_name = "重推支付单回执列表" + ".xlsx";

      if (window.navigator.msSaveBlob) {
        //IE
        window.navigator.msSaveBlob(blob, file_name);
      } else {
        let link = document.createElement("a");
        let href = window.URL.createObjectURL(blob);
        link.href = href;
        link.download = file_name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // 下载完成移除元素
        window.URL.revokeObjectURL(href); // 释放掉blob对象
      }
    },
    /* 移除 */
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    /* 禁止上传 */
    beforeUpload(file) {
      this.fileList = [file];
      return false;
    },
    /* 下载 */
    downLoadFn(falg = true) {
      this.isDisabled = true;

      !falg && this.$refs.downBtn.click();

      /* 倒数计30分钟 */
      const timeOut = setTimeout(() => {
        clearTimeout(timeOut);
        this.isDisabled = false;
        this.downLoadFn(false);
      }, 30 * 60 * 1000);
    },
  },
};
</script>

<style>
</style>
