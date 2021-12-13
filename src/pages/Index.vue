<template>
  <div>
    <div id="search">
      <div class="s1">
        <div style="margin: auto">
          <el-input type="text" v-model="key" placeholder="请输入您要搜索的内容..." style="width: 350px"/>
          <router-link tag="a" target="_blank" :to="{path:'/search',query:{key:key}}">
            <el-button type="primary">搜索</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <Shuffling/>
    <div class="main">
      <Primary/>
      <Recommend/>
      <NewBook/>
      <HotAuthor/>
    </div>
  </div>

</template>


<script>
import NewBook from "@/components/NewBook";

import("../assets/js/swiper.min")
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import Shuffling from "@/components/Shuffling";
import Primary from "@/components/Primary";
import Recommend from "@/components/Recommend";
import HotAuthor from "@/components/HotAuthor";
import Footer from "@/components/Footer";

export default {
  name: "index",
  components: {
    Footer,
    HotAuthor,
    NewBook,
    Navigation, Search, Shuffling, Primary, Recommend
  },
  data() {
    return {
      key: ''
    }
  }
}


</script>

<style>
@import "../assets/css/index.css";

.main {
  margin: 40px 100px;
}

#search {
  width: 100%;
  height: 50px;
  margin: 10px auto;
}

.s1 {
  padding: 30px 0;
  margin-top: 50px;
  float: left;
  text-align: center;
  width: 100%;
}

.rebang th, td {
  text-align: center;
  padding: 8px;
  height: 60px;
}

tr:nth-child(even) {
  background-color: #f2f2f2
}

.mytable {
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  background-color: #f2f2f2;
  border-style: solid;
  border-width: 1px;
  border-color: black;
}

.mytable td {
  border-style: dashed;
  border-width: 1px;
  border-color: black;
}

.mytable td:hover {
  background-color: #9E9C9C;
}

</style>
<style scoped>


body {
  font-size: 0;
}
</style>
