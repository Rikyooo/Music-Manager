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
              <el-button @click="dialogFormVisible=true">登陆</el-button>
              <el-button>注册</el-button>
            </el-button-group>
          </el-col>
        </el-row>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="400px">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-header>
      <el-main style="height:0;flex-grow:1;padding:0;">
        <div class="main-container">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer class="secondary-color" height="70px" style="padding:0;">
        <el-row type="flex" class="row-bg" justify="center" align="middle">
          <el-col :span="4">
            <el-button class="secondary-text" type="text">意见反馈</el-button> |
            <el-button class="secondary-text" type="text" style="margin:0;">联系我们</el-button> |
            <el-button class="secondary-text" type="text" style="margin:0;">帮助中心</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" align="middle">
          <el-col :span="6" class="secondary-text" style="line-height:20px;">Copyright © 2020, All Rights Reserved</el-col>
        </el-row>
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
      dialogFormVisible: false,
      formLabelWidth: 100,
      form: {
        name: 'name',
        region: 'region'
      }
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
.main-container {
  overflow-y: auto;
  height: 100%;
  padding: 0 10%;
}
</style>
