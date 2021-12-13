<template>
  <div class="d1">
    <div class="container">
      <p style="font-size: 25px;color: #fd4401;font-family: Hiragana Sans GB,serif;font-weight: bolder;margin-bottom: 10px">
        所有商品</p>
      <div style="width: 100px;margin: 0">
        <hr style="background-color: #fd4401;margin: 0">
      </div>
      <div style="height: 50px;text-align: left">
        <div style="width: 30px;float: left;"><p>选择</p></div>
        <div style="width: 210px;float: left;margin-left: 60px"><p>图片</p></div>
        <div style="width: 250px;float: left"><p>书名</p></div>
        <div style="width: 300px;float: left"><p>作者 / 出版社</p></div>
        <div style="width: 180px;float: left"><p>单价</p></div>
        <div style="width: 150px;float: left"><p>数量</p></div>
        <div style="width: 80px;float: left"><p>操作</p></div>

      </div>
      <div class="goods-item" v-for="book in bookList">
        <div class="msg" style="width: 30px;margin: 0">
          <el-checkbox v-model="book.checked" @change="updateChecked(book.id, book.checked)"></el-checkbox>
        </div>
        <router-link :to="`/book?id=${book.bookId}`" target="_blank">
          <div class="img"><img :src="book.pictureUrl" alt="图片"></div>
        </router-link>
        <router-link :to="`/book?id=${book.bookId}`" target="_blank">
          <div class="msg"><p>{{ book.bookName }}</p></div>
        </router-link>
        <div class="msg"><p>{{ book.author }} / {{ book.press }}</p></div>
        <div class="msg"><p>{{ book.price }}</p></div>
        <div class="msg" style="width: 80px">
          <button @click="updateCount(book,1)">-</button>&nbsp;<p>{{ book.count }}</p>&nbsp;<button
            @click="updateCount(book,2)">+
        </button>
        </div>
        <div class="msg" style="width: 180px">
          <button @click="remove(book.id)">从购物车移除</button>
        </div>
      </div>
      <div style="float: right;margin-top: 50px">
        <div style="float:left;">

          <p style="font-size: 25px;color: red;margin: 5px 20px 0 0">￥{{ totalPrice }}</p>
        </div>
        <el-button type="primary" @click="toPay">结算</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {getCartBook, removeGoods, setChecked, setNumber} from "@/api/order";

export default {
  name: "Cart",
  data() {
    return {
      bookList: [],
      len: 0,

    }
  },
  created() {
    if (!sessionStorage.getItem("isLogin")) {
      this.$message.info("请先登陆")
      this.$router.push("/login")
      return
    }
    this.fetchData()
  },
  methods: {
    toPay() {
      if (this.checkedNum === 0) {
        return this.$message.info("请先勾选要买的书籍！")
      }
      this.$router.push({path: '/pay', params: {'goods': 'book'}})
    },
    fetchData() {
      getCartBook().then(res => {
        if (res.code !== 200) {
          this.$message.error("购物车加载失败")
        }
        this.bookList = res.data.list
        this.len = res.data.list.length
        console.log(res.data.list)
      })
    },
    updateChecked(id, checked) {
      setChecked(id, checked).then(res => {
        if (res.code !== 200) {
          this.$message.error("失败")
          this.fetchData()
        }
      })
    },
    updateCount(book, n) {
      if (n === 1 && book.count > 1) {
        book.count--
      } else if (n === 2) {
        book.count++
      }
      setNumber(book.id, book.count).then(res => {
        if (res.code !== 200) {
          this.$message.error("失败")
          this.fetchData()
        }
      })
    },
    remove(id) {
      this.$confirm("确定要删除吗？", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(() => {
        removeGoods(id).then(res => {
          if (res.code !== 200) {
            return this.$message.error("删除失败，请重试")
          }
          this.$message.success("删除成功！")
          this.fetchData()
        })
      })

    }
  },
  computed: {
    totalPrice() {
      let total = 0
      this.bookList.forEach(book => {
        if (book.checked) {
          total += book.price * book.count
        }
      })
      return total.toFixed(2)
    },
    checkedNum() {
      let total = 0
      this.bookList.forEach(book => {
        if (book.checked) {
          total += 1
        }
      })
      return total
    }
  },
}
</script>

<style scoped>
.msg {
  display: flex;
  height: 100%;
  width: 250px;
  float: left;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
}

.d1 {
  width: 100%;
  float: left;
  margin-top: 30px;
}

.container {
  width: 80%;
  text-align: left;
  margin: auto;
  /*background-color: #00a0e9;*/
}


.goods-item {
  width: 100%;
  height: 150px;
  /*background-color: #dbeaef;*/
  margin-top: 10px;
  border: #00a0e9 1px solid;
}

.img {
  height: 150px;
  width: 150px;
  float: left;
  justify-content: center;
  align-items: center;
  display: flex;
}

.img img {
  height: 90%;
  width: 90%;
}
</style>
