<template>
  <div id="search">

    <div class="s1">
      <div style="margin: auto">
        <el-input type="text" v-model="key" placeholder="请输入您要搜索的内容..." style="width: 350px" @keyup.enter="search"/>
        <el-button type="primary" @click="search">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Search",
  data() {
    return {
      key: ''
    }
  },
  methods: {
    search() {
      pubsub.publish('getData', this.key)
    }
  }
}
</script>

<style scoped>
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


</style>
