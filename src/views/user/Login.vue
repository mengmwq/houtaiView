<!--
 * @Author: your name
 * @Date: 2020-11-27 13:56:56
 * @LastEditTime: 2020-11-30 11:50:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit1
 * @FilePath: \wlgl-antd\src\views\user\Login.vue
-->
<template>
  <div class="login-box">
    <img class="left-img" src="../../assets/bg.png" alt="" />
    <div class="right-login">
      <img src="../../assets/img/logo.png" alt="" style="width:230px;height:123px">
      <span class="logo-name">火凤凰电商数据平台</span>
      <a-row>
        <a-form :form="form" class="my-login">
          <a-form-item>
            <a-input
              class="input-box"
              v-decorator="[
                'username',
                {
                  rules: [
                    { required: true, message: '请输入手机号' },
                  ],
                },
              ]"
              placeholder="请输入手机号"
            />
          </a-form-item>
          <a-form-item>
            <a-input
              class="input-box"
              v-decorator="[
                'user_pass',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                    },
                  ],
                },
              ]"
              placeholder="请输入密码"
            />
          </a-form-item>

          <a-form-item class="login-btn">
            <a-button class="login-submit" type="primary" @click="check" >
             登录
            </a-button>
          </a-form-item>
        </a-form>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkNick: false,

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

<style scoped lang="less">
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
  display: flex;
   flex-direction: column;

  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 150px;
}
.logo-name{
  font-size: 25px;
  font-weight: bold;
  margin: 10px auto 50px auto;
}
.input-box{
  padding: 20px 160px;
  padding-left: 10px;
  background: pink;
  outline: none;
}
.input-box::placeholder{
  color: #333;
  border-radius: 5px;
}
.login-btn /deep/ .ant-form-item-control{
  width: 100%;
  display: flex;
   /deep/ .ant-form-item-children{
    flex: 1;
  }
}
button.login-submit.ant-btn.ant-btn-primary {
    width: 100%;
    background-color:pink ;
     outline: none;
  border-radius: 5px;
     color: #333;
}
</style>
