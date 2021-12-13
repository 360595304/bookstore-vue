<template>
  <div>
    <div style="z-index: 0; float:left; height: 50px;">
      <router-link to="/">
        <img src="http://localhost:8088/img/logo.png" alt="LOGO">
      </router-link>
    </div>
    <div class="top">
      <router-link to="/login" v-show="!isLogin">
        登陆
      </router-link>
      <span @click="logout" v-show="isLogin">注销</span>
      <span>&nbsp;</span>
      <router-link to="/cart" v-show="isLogin">
        购物车
      </router-link>
      <span>&nbsp;</span>
      <router-link to="/home" v-show="isLogin">
        <i class="fa fa-user fa-2x"> </i>
      </router-link>
      <span>&nbsp;</span>
    </div>
  </div>
</template>

<script>
import {doLogout} from "@/api/login";

export default {
  name: "Navigation",
  data(){
    return{
      isLogin: false
    }
  },
  created() {
    this.isLogin = sessionStorage.getItem("isLogin")
  },
  methods:{
    logout(){
      doLogout().then(res=>{
        if (res.code !== 200) {
          return this.$message.error(res.message)
        }
        this.$message.success(res.message)
        sessionStorage.clear()
        this.$router.push("/")

      })
    }
  }
}
</script>

<style scoped>
.top {
  float: right;
  margin: 0 20px;
}
</style>
