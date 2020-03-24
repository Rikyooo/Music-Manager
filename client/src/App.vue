<template>
  <div id="app">
    <el-container>
      <el-header style="padding:0;">
        <el-row type="flex" class="primary-color" justify="end" align="middle" style="height:100%;">
          <el-col :span="4" >
            <el-button-group>
              <el-button class="primary-button default-text" @click="dialogFormVisible=true">登陆</el-button>
              <el-button class="secondary-button default-text">注册</el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="height:calc(100%-120px);">
        Main
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="25%">
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
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-main>
      <el-footer class="secondary-color secondary-text" height="70px" style="padding:0;">
        <el-row type="flex" class="row-bg" justify="center" align="middle">
          <el-col :span="4">
            <el-button class="secondary-text" type="text">意见反馈</el-button> |
            <el-button class="secondary-text" type="text">联系我们</el-button> |
            <el-button class="secondary-text" type="text">帮助中心</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" align="middle">
          <el-col :span="6">Copyright © 2020, All Rights Reserved</el-col>
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
}
</style>
