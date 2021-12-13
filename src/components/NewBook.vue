<template>
  <div class="new">
    <div class="new-book">
      <h1 align="left">新书推荐</h1>
      <p align="right"><a href="#">查看更多</a></p>
      <hr color="red">
      <BookList :bookList="bookList"/>
    </div>
    <div class="new-book-list">
      <h1 align="center">新书榜</h1>
      <hr color="red">
      <BookPicList/>
    </div>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
import BookPicList from "@/components/BookPicList";
import {getNewBook} from "@/api/book";

export default {
  name: "NewBook",
  components: {BookPicList, BookList},
  data(){
    return {
      bookList: null
    }
  },
  created() {
    getNewBook(12).then(res=>{
      if (res.code !== 200) {
        return this.$message.error("书籍获取失败:" + res.message);
      }
      this.bookList = res.data.bookList
    })
  }
}
</script>

<style scoped>
.new {
  margin-top: 100px;
}

.new-book {
  float: left;
  width: 80%;
}

.new-book-list {
  width: 14%;
  float: left;
  text-align: center;
  margin: 35px 0 0 70px;
}
</style>
