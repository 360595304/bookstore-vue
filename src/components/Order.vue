<template>
  <div class="content-right">
    <!--    <div class="delete">-->
    <!--      <div class="delete-photo"></div>-->
    <!--    </div>-->
    <div class="buy">
      <div v-for="(order,index) in orderList" class="order">
        <div>
          <div style="width: 70%;background-color: #e9f7fe;height: 30px;float: left"> {{ order.createTime }}&nbsp;&nbsp;&nbsp;订单号
            {{ order.id }}
          </div>
          <div style="width: 30%;background-color: #e9f7fe;height: 30px;float: right;"> 总价：{{ price[index] }}</div>
        </div>
        <div v-for="goods in order.goodsList" style="width: 100%;height: 140px;background-color: #e2ffff;float: left">
          <div class="item" style="width: 230px;padding: 15px">
            <router-link :to="`/book?id=${goods.bookId}`" target="_blank">
              {{ goods.bookName }}
            </router-link>
          </div>
          <div class="item" style="width: 160px">
            作者：{{ goods.author }}
          </div>
          <div class="item" style="width: 100px">
            单价：{{ goods.price }}
          </div>
          <div class="item" style="width: 100px">
            数量：{{ goods.count }}
          </div>
          <div class="item" style="width: 100px">
            价格：{{ goods.count*goods.price }}
          </div>
        </div>
          <div style="width: 100%;text-align: right">
            状态：{{state[order.state]}}
          </div>

      </div>

      <!--      <table>-->
      <!--        <tr style="background-color: rgb(181,181,181);height: 30px;">-->
      <!--          <td style="width: 150px">订单号</td>-->
      <!--          <td style="width: 50px">收货人</td>-->
      <!--          <td style="width: 100px">电话</td>-->
      <!--          <td style="width: 150px">地址</td>-->
      <!--          <td style="width: 50px">实付款</td>-->
      <!--          <td style="width: 50px">交易状态</td>-->
      <!--          <td style="width: 50px">交易操作</td>-->
      <!--        </tr>-->
      <!--        <tr style="height: 60px;" v-for="(order,index) in orderList">-->
      <!--          <td>{{ order.id }}</td>-->
      <!--          <td>{{ order.recName }}</td>-->
      <!--          <td>{{ order.recPhone }}</td>-->
      <!--          <td>{{ order.recAddress }}</td>-->

      <!--          <td>{{ price[index] }}</td>-->

      <!--          <td>{{ state[order.state] }}</td>-->
      <!--          <td>-->
      <!--            <button @click="deleteOrder(order.id)">删除</button>-->
      <!--          </td>-->
      <!--        </tr>-->

      <!--      </table>-->
    </div>
  </div>
</template>

<script>
import {get, removeOrder} from '@/api/order'

export default {
  name: "Order",
  data() {
    return {
      orderList: [],
      state: ['未付款', '已付款', '配送中', '已收货', '已完成'],
    }
  },
  methods: {
    deleteOrder(orderId) {
      this.$confirm("确定删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        removeOrder(orderId).then(res => {
          if (res.code !== 200) {
            return this.$message.error("删除失败")
          }
          this.$message.success("删除成功")
          this.fetchData()
        })
      })
    }
  },
  created() {
    get().then(res => {
      if (res.code !== 200) {
        return this.$message.error('获取订单失败')
      }
      this.orderList = res.data.order
      console.log(this.orderList)
    })
  }
  ,
  computed: {
    price() {
      let price = new Array(this.orderList.length)
      for (let i = 0; i < this.orderList.length; i++) {
        let total = 0
        this.orderList[i].goodsList.forEach(book => {
          total += book.price * book.count
        })
        price[i] = total.toFixed(2)
      }
      return price
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  height: 100%;
  /*border-bottom: black 1px solid;*/
}

.order {
  text-align: left;
  margin-bottom: 20px;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

input {
  display: inline-block;
}

.content-right {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.buy {
  display: flex;
  width: 100%;
  height: 650px;
  /*margin-left: 50px;*/
  flex-direction: column;
  justify-content: start;
  border-top: 1px solid black;
}

table {
  border-collapse: collapse;
  text-align: center;
}

.page {
  display: inline-block;
  width: 50px;
  height: 20px;
  font-size: 10px;
  border: 1px solid black;
}


</style>
