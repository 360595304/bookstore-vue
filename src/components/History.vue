<template>
  <div class="about">
    <div v-for="book in historyList" style="margin: 20px">
      <router-link :to="`/book?id=${book.bookId}`" target="_blank">
        <img :src="book.pictureUrl" alt="图片" style="height: 150px;width: 100px;">
      </router-link>
      <div>{{ book.browseTime }}</div>
    </div>
  </div>
</template>

<script>
import {getHistory} from "@/api/history";

export default {
  name: "History",
  data() {
    return {
      historyList: []
    }
  },
  created() {
    getHistory().then(res => {
      if (res.code !== 200) {
        return this.$message.error('获取历史记录失败')
      }
      this.historyList = res.data.history
      console.log(res.data)
    })
  }
}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}

p {
  font-size: 25px;
}
</style>
