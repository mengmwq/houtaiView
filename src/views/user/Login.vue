<!--
 * @Author: your name
 * @Date: 2020-11-27 13:56:56
 * @LastEditTime: 2020-11-27 17:49:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit1
 * @FilePath: \wlgl-antd\src\views\user\Login.vue
-->
<template>
  <div class="login-box">
    <img class="left-img" src="../../assets/bg.png" alt="" />
    <div class="right-login">
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Name"
        >
          <a-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: 'Please input your name' }],
              },
            ]"
            placeholder="Please input your name"
          />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Nickname"
        >
          <a-input
            v-decorator="[
              'nickname',
              {
                rules: [
                  {
                    required: checkNick,
                    message: 'Please input your nickname',
                  },
                ],
              },
            ]"
            placeholder="Please input your nickname"
          />
        </a-form-item>
        <a-form-item
          :label-col="formTailLayout.labelCol"
          :wrapper-col="formTailLayout.wrapperCol"
        >
          <a-checkbox :checked="checkNick" @change="handleChange">
            Nickname is required
          </a-checkbox>
        </a-form-item>
        <a-form-item
          :label-col="formTailLayout.labelCol"
          :wrapper-col="formTailLayout.wrapperCol"
        >
          <a-button type="primary" @click="check"> Check </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
    };
  },
  methods: {
    check() {
      this.form.validateFields((err) => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    },
  },
};
</script>

<style scoped>
.login-box {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}

  .left-img {
    width: 40%;
    flex-shrink: 0;
    height: 100%;
    object-fit: cover;
  }
  .right-login {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .right-login .ant-form{
    width: 100%;
    margin: 0 auto;
  }
</style>
