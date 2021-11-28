<template>
  <div class="new">
    <div class="new-book">
      <h1 align="left">新书推荐</h1>
      <p align="right"><a href="#">查看更多</a></p>
      <hr color="red">
      <BookList/>
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

export default {
  name: "NewBook",
  components: {BookPicList, BookList}
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
