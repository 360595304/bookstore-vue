<template>
  <div class="height-width">
<!--    <div class="nav">-->
<!--      <div class="nav-left">-->
<!--        <div class="logo" title="logo"></div>-->
<!--        <div class="on-off"></div>-->
<!--      </div>-->
<!--      <div class="other">-->
<!--        <div class="other-top">-->
<!--          <div class="user bgsize"></div>-->
<!--          <div class="help bgsize"></div>-->
<!--          <div class="shopping bgsize"></div>-->
<!--          <div class="servicer bgsize"></div>-->
<!--          <div class="set bgsize"></div>-->
<!--        </div>-->
<!--        <div class="QR-Code other-bottom"></div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="content">
      <div class="content-left">
        <div class="item">
          <router-link to="/home/u">账户信息</router-link>
        </div>
        <div class="item">
          <router-link to="/home/order">我的订单</router-link>
        </div>
        <div class="item">
          <router-link to="/home/history">浏览记录</router-link>
        </div>
        <div class="item">
          <router-link to="/home/about">意见反馈</router-link>
        </div>

      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

input {
  display: inline-block;
}

.height-width {
  height: 950px;
  width: 80%;
  margin: 100px 100px;
  float: left;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: 100px;
}

.nav-left {
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 100px;
  height: 100px;
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.on-off {
  width: 90px;
  height: 90px;
  background-size: 80px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.middle {
  height: 50px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: end;
}

.search {
  height: 30px;
  width: 480px;
  outline: none;
  border-radius: 15px;
  border: 1px solid black;
  font-size: 20px;
  box-shadow: 3px 3px 3px gray;
}

.other {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 200px;
}

.other-top {
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 200px;
}

.other-bottom {
  display: inline-block;
  width: 200px;
  height: 100px;
}

.bgsize {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.QR-Code {
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: right;
}

.content {
  height: 100%;
  margin: 0 100px;
}

.content-left {
  height: 785px;
  width: 100px;
  background-color: rgb(240, 240, 240);
  float: left;
  /*display: inline-block;*/
}

.item {
  display: flex;
  height: 70px;
  border-bottom: black 1px solid;
  align-items: center;
  justify-content: center;
}

.list {
  height: 785px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.right {
  float: left;
  margin-left: 100px;
  text-align: center;
  width: 80%;
}

table {
  border-collapse: collapse;
  text-align: center;
}
</style>
