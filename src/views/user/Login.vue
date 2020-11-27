<!--
 * @Author: your name
 * @Date: 2020-11-27 13:56:56
 * @LastEditTime: 2020-11-27 19:00:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit1
 * @FilePath: \wlgl-antd\src\views\user\Login.vue
-->
<template>
  <div class="login-box">
    <img class="left-img" src="../../assets/bg.png" alt="" />
    <div class="right-login">
      <img src="../../assets/img/logo.png" alt="" style="width:230px;height:123px">
      <a-row>
        <a-form :form="form">
          <a-form-item>
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [
                    { required: true, message: 'Please input your name' },
                  ],
                },
              ]"
              placeholder="Please input your name"
            />
          </a-form-item>
          <a-form-item>
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

          <a-form-item>
            <a-button type="primary" @click="check" >
              Check
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
  display: flex;
   flex-direction: column;

  /* flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}
</style>
