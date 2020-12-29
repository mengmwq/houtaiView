<!--
 * @Author: your name
 * @Date: 2020-11-30 11:26:18
 * @LastEditTime: 2020-12-29 15:02:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \houtaiView\src\views\business\Device\add.vue
-->
<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    :layout="formLayout"
  >
    <a-form-item label="商品名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-input placeholder="请输入商品名称" disabled />
    </a-form-item>
    <a-form-item label="sku编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-input placeholder="请输入sku编码"   disabled />
    </a-form-item>
    <a-form-item label="商品条码" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-input placeholder="请输入商品条码" />
    </a-form-item>
    <a-form-item label="品牌名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-input placeholder="请输入品牌名称"    disabled />
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(values);
        // editNews({
        //   action: 'update',
        //   title: values.title,
        //   introduce: values.introduce
        // }).then(res => {
        //   console.log(res)
        //   if (res.code == 0) {
        //     this.$message.success('当前已经成功修改/修改')
        //     this.getNewslist()
        //   }
        // })
      });
    }
  }
};
</script>

<style></style>
