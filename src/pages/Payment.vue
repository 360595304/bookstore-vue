<template>
  <div class="d">
    <div class="container">

      <div>
        <p style="text-align: left;font-size: 16px;color: orange">订单号：{{ order.id }}</p>
        <p style="text-align: left;font-size: 16px;color: orange">创建时间：{{ order.createTime }}</p>
        <p style="text-align: left;font-size: 16px;color: orange">状态：{{ state[order.state] }}</p>
        <el-button type="success" v-show="order.state === 0" @click="pay">点我完成付款</el-button>
      </div>
    </div>
  </div>

</template>

<script>
import {getOrderById, getOrderPrice} from "@/api/order";
import {payOrder} from "@/api/order";

export default {
  name: "Payment",
  data() {
    return {
      order: {},
      price: 0,
      state: ['未付款', '已支付']
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    pay() {
      payOrder(this.order.id).then(res => {
        if (res.code !== 200) {
          return this.$message.error("支付失败")
        }
        this.$message.success(res.message)
        this.$router.push("/paySuccess")
      })
    },
    fetchData() {
      const id = this.$route.query.orderId
      if (id === null) {
        this.$router.push("/cart")
      }
      getOrderById(id).then(res => {
        if (res.code !== 200) {
          return this.$message.error("错误")
        }
        this.order = res.data.order
        console.log(this.order)
        if (this.order === null) {
          this.$router.push("/cart")
          return this.$message.error("订单不存在")
        }
      })
      getOrderPrice(id).then(res => {
        if (res.code !== 200) {
          return this.$message.error("错误")
        }
        this.price = res.data.price
        console.log(this.price)
      })
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  background-color: #e2ffff;
}

.d {
  margin-top: 100px;
  width: 100%;
  float: left;
}
</style>
