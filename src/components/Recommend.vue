<template>
  <div class="recommend">
    <div class="left">
      <h1 align="left">主编推荐</h1>
      <p align="right"><a href="#">查看更多</a></p>
      <hr color="red">
      <BookList/>
    </div>
    <div class="right">

      <table style=" width: 80%;">
        <tr>
          <a href="#"><img src="img/banner001.jpg"></a>
        </tr>
        <tr>
          <a href="#"><img src="img/banner001.jpg"></a>
        </tr>
        <tr>
          <a href="#"><img src="img/banner001.jpg"></a>
        </tr>
        <tr>
          <a href="#"><img src="img/banner001.jpg"></a>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
export default {
  name: "Recommend",
  components: {BookList}
}
</script>

<style scoped>
.recommend {
  margin-top: 100px;
  float: left;
}

.left {
  width: 80%;
  float: left;
}

.right {
  float: right;
  width: 15%;
  margin-top: 130px;
}
.right img {
  width: 190px;
  height: 100px;
}
</style>
