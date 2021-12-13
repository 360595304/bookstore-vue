<template>
  <div class="d1">
    <div class="container">
      <div class="registered">

        <div style="height: 85%; width: 20%;float: left">
          <div class="item label">手机号</div>
          <div class="item label">密码</div>
          <div class="item label">昵称</div>
          <div class="item label">邮箱</div>
          <div class="item label">性别</div>
          <div class="item label">生日</div>
        </div>
        <div style="height: 85%; width: 50%;float: left">
          <el-input class="item" v-model="user.username"></el-input>
          <el-input class="item" v-model="user.password" type="password"></el-input>
          <el-input class="item" v-model="user.nicename"></el-input>
          <el-input class="item" v-model="user.email"></el-input>
          <div class="item">
            <el-radio v-model="user.sex" label="1">男</el-radio>
            <el-radio v-model="user.sex" label="0">女</el-radio>
          </div>
          <div class="item"><div class="block">
            <el-date-picker v-model="user.birth" type="date" placeholder="选择生日">
            </el-date-picker>
          </div></div>
        </div>
        <div style="height: 85%; width: 30%;float: left"></div>
        <el-button style="float: right;margin-right: 50px" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {signUp} from "@/api/login";
export default {
  name: "Registered",
  data() {
    return {
      user: {
        username: '',
        password: '',
        nicename: '',
        email: '',
        sex: '',
        birth: ''
      }
    }
  },
  methods: {
    register() {
      signUp(this.user).then(res=>{
        if (res.code !== 200) {
          return this.$message.error(res.message)
        }
        this.$message.success(res.message)
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 20px;
  font-family: "Fira Code", sans-serif;
}
.item {
  margin: 10px 0;
  height: 45px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.registered {
  width: 40%;
  height: 400px;
  background-color: #e2ffff;
  margin: auto;
  padding: 30px 40px;
}

.d1 {
  float: left;
  width: 100%;
  margin-top: 100px;
}

.container {
  width: 80%;
  margin: auto;
}
</style>
