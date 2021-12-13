<template>
  <div class="book-list">

    <div class="book-item" v-for="item in bookList">
      <router-link tag="a" target="_blank" :to="`/book?id=${item.id}`"><img :src="item.pictureUrl" width="160px" height="200px" alt=""></router-link>
      <router-link tag="a" target="_blank" :to="`/book?id=${item.id}`"><p align="center" style="width: 100%;height: 40px">{{ item.name.split(" ")[0] }}</p>
      </router-link>
      <p align="center">价格：{{ item.discountPrice }}</p>
    </div>


  </div>

</template>

<script>
export default {
  name: "BookList",
  props: ["bookList"]
}
</script>

<style scoped>
.book-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.book-item {
  margin: 10px 10px;
  width: 160px;
  height: 300px;
}
</style>
