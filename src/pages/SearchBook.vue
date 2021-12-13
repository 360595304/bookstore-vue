<template>
  <div>
    <Search></Search>
    <div class="container">
      <div class="book-list" v-for="book in bookList">
        <div class="picture">
          <img :src="book.pictureUrl" alt="">
        </div>
        <div class="book-msg">
          <router-link :to="`/book?id=${book.id}`">
            <p style="font-size: 25px;color: #00a0e9; margin: 0;height: 100px">{{ book.name }}</p>
          </router-link>
          <div>
            <span
                style="color: red;font-size: 25px;font-family: arial,monospace;font-weight: bolder">¥{{
                book.discountPrice
              }}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style="color: grey;font-size: 16px;font-family: arial,monospace;font-weight: bolder">¥{{
                book.originalPrice
              }}({{ book.discount / 10 }}折)</span>
          </div>
          <div style="margin-top: 10px; height: 50px;">
            <span>{{ book.author }} / </span>
            <span>{{ book.pubDate }} / </span>
            <span>{{ book.press }}</span>
          </div>
          <div style="font-size: 16px"></div>
          <div style="float: right">
            <el-button @click="addToCar(book.id)">加入购物车</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import {getList} from "@/api/book";
import pubsub from 'pubsub-js'
import {mapMutations} from 'vuex'
import {USERLOGIN, USERLOGOUT} from '@/store/types'
import {addGoods} from "@/api/order";

export default {
  name: "SearchBook",
  components: {Search},
  data() {
    return {
      key: this.$route.query.key,
      bookList: []

    }
  },
  mounted() {
    pubsub.subscribe('getData', (name, key) => {
      this.fetchData(key)
    })
  },
  methods: {
    ...mapMutations([USERLOGIN, USERLOGOUT]),
    fetchData(key) {
      getList(1, 7, key).then(res => {
        if (res.code !== 200) {
          return
        }
        this.bookList = res.data.bookList.records
      })
    },
    addToCar(bookId) {
      const isLogin = sessionStorage.getItem('isLogin')
      if (!isLogin) {
        this.$router.push('/login')
      }
      addGoods(bookId).then(res => {
        if (res.code !== 200) {
          return this.$message.error('添加失败！')
        }
        this.$message.success('添加到购物车成功！')
      })

    }
  },
  created() {
    this.fetchData(this.key)
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  float: left;
}

.book-list {
  width: 70%;
  margin: 50px auto 0 auto;
  height: 230px;

}

.picture {
  height: 100%;
  width: 230px;
  float: left;
}

.picture img {
  width: 100%;
  height: 100%;
}

.book-msg {
  height: 100%;
  /*background-color: #00a0e9;*/
  text-align: left;
  float: right;
  width: 75%;
  /*margin-left: 20px;*/
}
</style>
