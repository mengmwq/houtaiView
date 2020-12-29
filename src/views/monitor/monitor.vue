<!--
 * @Author: your name
 * @Date: 2020-11-27 18:18:59
 * @LastEditTime: 2020-12-21 19:31:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlgl-antd\src\views\monitor.vue
-->
<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <a-steps :current="current" style="margin-bottom: 50px">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div
        :class="{ active: stepsContent }"
        style="
          display: flex;
          justify-content: center;
          justify-content: center;
          height: 300px;
          line-height: 300px;
        "
      >
        <div>
          <a-row :gutter="24">
            <a-col v-show="first" :span="24">
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
            <a-col v-show="sencd" :span="24">
              <a-upload
                name="file"
                :file-list="fileList"
                :multiple="false"
                :remove="handleRemove"
                :headers="headers"
                :before-upload="beforeUpload"
                @change="changeEnd"
              >
                <a-button> <a-icon type="upload" /> 选择文件</a-button>
              </a-upload>
              <!-- <a-button
                    :disabled="!fileList.length"
                    type="dashed"
                    @click="uploadFile"
                    >确定</a-button
                  > -->
            </a-col>
            <a-col v-show="last">
              <div>导入数据成功，详情请查看excel表格。</div>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-card>
    <div
      class="steps-action"
      style="
        display: flex;
        justify-content: center;
        justify-content: center;
        margin: 30px 0;
      "
    >
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        {{ nexttext }}
      </a-button>
      <!-- <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
        >

        </a-button> -->
    </div>
  </page-header-wrapper>
</template>

<script>
import { uploadData } from "@/api/monitor";
export default {
  data() {
    return {
      headers: {},
      /* 是否禁用下载 - 默认可以下载 */
      isDisabled: false,
      /* 数组 */
      fileList: [],
      first: true,
      sencd: false,
      last: false,
      current: 0,
      stepsContent: false,
      nexttext: "下一步",
      steps: [
        {
          title: "下载支付单模板",
        },
        {
          title: "重推支付单",
        },
        {
          title: "完成",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    /* changeEnd */
    changeEnd({ file }) {
      // console.log(file);
      // console.log("在这里上传");
    },
    next() {
      if (this.current == 0) {
        this.current++;
           this.stepsContent = true;
          this.first = false;
          this.sencd = true;
          this.last = false;
          this.nexttext = "确定导入";


      } else if (this.fileList.length == 0) {

        this.$message.error("请选择文件");



      }else{

          this.uploadFile();
          this.current++

          this.stepsContent = false;
          this.first = false;
          this.sencd = false;
          this.last = true;
          //this.$router.go(0)
      }


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
    /* 允许上传 */
    beforeUpload(file) {
      this.fileList = [file];
      return true;
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
.active {
  border: 1px dashed #ff7a45;
}
</style>
