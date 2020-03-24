<template>
  <div id="app">
    <el-container style="height:100%;">
      <el-header class="primary-color" height="80px" style="padding:0;">
        <el-row type="flex" justify="space-between" align="middle" style="height:100%;">
          <el-col :span="2" :offset="1">
            <a href="/" title="星星音乐">
              <img src="../public/logo_title_100px.png" title="星星音乐" alt="星星音乐" style="height:60px;opacity:0.8;">
            </a>
          </el-col>
          <el-col :span="3" :pull="1">
            <el-button-group v-show="!isLogin&&!isRegisting">
              <el-button @click="isLoginFormShow=true">登陆</el-button>
              <el-button>注册</el-button>
            </el-button-group>
          </el-col>
        </el-row>
        <el-dialog :visible.sync="isLoginFormShow" :show-close="false" width="400px" center>
          <el-tabs v-model="activeTabName" :stretch="true" >
            <el-tab-pane label="账号密码登陆" name="loginByAccount">
              <el-form :model="accountForm" :rules="accountFormRules" :status-icon="true" ref="accountForm" id="accountForm">
                <el-form-item prop="account">
                  <el-input placeholder="账号" prefix-icon="el-icon-user" v-model="accountForm.account"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="accountForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('accountForm')" style="width:100%;">登录</el-button>
                </el-form-item>
                <el-row type="flex" justify="space-between" align="middle" style="height:100%;">
                  <el-col :span="7">
                    <el-form-item style="margin-bottom:0px;">
                      <el-checkbox v-model="isRememberMe">下次自动登录</el-checkbox>
                    </el-form-item>
                  </el-col>
                  <el-col :span="9.5">
                    <el-link :underline="false" >立即注册</el-link> |
                    <el-link :underline="false" >忘记密码？</el-link>
                  </el-col>
                </el-row>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="短信快捷登陆" name="loginBySMS">
              <el-form :model="SMSForm">
                duanxinkuaijiedenglu
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <div slot="footer" class="dialog-footer">
            <!-- <el-button type="primary" @click="isLoginFormShow = false" style="width:100%;">确 定</el-button> -->
          </div>
        </el-dialog>
      </el-header>
      <el-main>
        <div class="main-container">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer class="secondary-color">
        <div>
          <el-row type="flex" class="row-bg" justify="center" align="middle">
            <el-col :span="4">
              <el-link :underline="false" >意见反馈</el-link> |
              <el-link :underline="false" >联系我们</el-link> |
              <el-link :underline="false" >帮助中心</el-link>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row type="flex" class="row-bg" justify="center" align="middle">
            <el-col :span="6" class="primary-text" style="line-height:20px;">Copyright © 2020, All Rights Reserved</el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
      isLogin: false,
      isRegisting: false,
      isLoginFormShow: false,
      activeTabName: 'loginByAccount',
      accountForm: {
        account: '',
        password: ''
      },
      accountFormRules: {
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 5, max: 13, message: '长度在 5 到 13 个字符', trigger: 'blur' }
        ]
      },
      SMSForm: {
        phoneNumber: '',
        note: ''
      },
      isRememberMe: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
.el-main {
  height: 0;
  flex-grow: 1;
  padding: 0;
}
.main-container {
  overflow-y: auto;
  height: 100%;
  padding: 0 10%;
}
.el-footer {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-dialog__header {
  padding: 0px!important;
}
.el-dialog__body {
  padding: 20px 0px 10px!important;
  text-align: center!important;
}
#accountForm {
  padding: 0px 20px;
}
</style>
