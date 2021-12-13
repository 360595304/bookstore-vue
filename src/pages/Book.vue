<template>
  <div class="container">
    <div class="book-item">
      <div class="picture"><img :src="book.pictureUrl" alt=""></div>
      <div class="book-information">
        <h1 style="color: #00a0e9">
          {{ book.name }}
        </h1>
        <div class="intro">
          {{ book.intro }}
        </div>
        <div style="float: left;width: 350px">
          <div class="p1">作者：{{ book.author }}</div>
          <div class="p1">出版社：{{ book.press }}</div>
          <div class="p1">出版时间：{{ pubTime }}</div>
        </div>
        <div class="p2">
          {{ book.type }}
        </div>
        <div class="p2">
          ISBN：{{ book.isbn }}
        </div>
        <div class="price">
          ￥{{ book.discountPrice }}
        </div>
      </div>
      <div style="float: right;margin-top: 50px">
        <el-button @click="addToCar(book.id)">加入购物车</el-button>
        <el-button @click="buy(book.id)">立即购买</el-button>
      </div>
    </div>
    <div class="recommend">
      <p style="text-align: left;margin: 50px 0 10px 40px;font-size: 20px">相关推荐</p>
      <hr>
      <BookList :bookList="similarBookList"></BookList>
    </div>
  </div>
</template>

<script>
import {getBook} from "@/api/book";
import {getSimilarBook} from "@/api/book";
import BookList from "@/components/BookList";
import {addGoods, creatOrder} from "@/api/order";

export default {
  name: "Book",
  components: {BookList},
  data() {
    return {
      book: {},
      pubTime: '',
      similarBookList: {},
    }
  },
  created() {
    getBook(this.$route.query.id).then(res => {
      if (res.code !== 200) {
        return
      }
      this.book = res.data.book
      console.log(this.book)
      let arr = this.book.pubDate.split("-")
      let year = arr[0]
      let month = Number(arr[1])
      this.pubTime = year + "年" + month + "月"
      let type = this.book.type.split("-")
      type = type[type.length - 1]
      getSimilarBook(type).then(res => {
        if (res.code !== 200) {
          return
        }
        this.similarBookList = res.data.bookList
      })
    })
    // getSimilarBook()
  },
  methods: {
    addToCar(bookId) {
      const isLogin = sessionStorage.getItem('isLogin')
      if (!isLogin) {
        this.$router.push('/login')
        return this.$message.info('请先登陆！')
      }
      addGoods(bookId).then(res => {
        if (res.code !== 200) {
          return this.$message.error('添加失败！')
        }
        this.$message.success('添加到购物车成功！')
      })
    },
    buy(bookId) {

      creatOrder().then(res => {

      })

    }
  }

}
</script>

<style scoped>
.container {
  text-align: center;
  float: left;
  width: 100%;
  margin-top: 100px;
}

.book-item {
  width: 60%;
  height: 400px;
  /*background-color: #e1e1b5;*/
  margin: auto;
}

.picture {
  width: 30%;
  float: left;
}

.picture img {
  width: 100%;
  height: 100%;
}

.book-information {
  /*background-color: #7BA7AB;*/
  text-align: left;
}


.intro {
  margin-top: 30px;
  /*font-family: 宋体, sans-serif;*/
  font-size: 20px;
  height: 100px;
  /*background-color: #7BA7AB;*/
}

.p1 {
  height: 40px;
  font-size: 18px;
}

.p2 {
  font-size: 18px;
  height: 40px;
}

.price {
  /*margin-top: 10px;*/
  font-family: Calibre, sans-serif;
  color: red;
  font-size: 25px
}

.recommend {
  width: 70%;
  margin: auto;
}
</style>
