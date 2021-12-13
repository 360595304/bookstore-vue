<template>
  <div class="d">
    <div class="container">
      <p style="font-size: 25px;color: #00a0e9">请核对您的订单</p>
      <el-table :data="bookList"
                border

                :cell-style="{padding: '2px 0'}">
        <el-table-column label="书名" prop="bookName" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="预览图" :show-overflow-tooltip="true">
          <template slot-scope="scope" style="margin: auto">
            <img :src="scope.row.pictureUrl" alt="预览图" style="width: 70px;height: 100px">
          </template>
        </el-table-column>
        <el-table-column label="价格" prop="price" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="数量" prop="count" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="总价" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{ scope.row.price * scope.row.count }}
          </template>
        </el-table-column>
      </el-table>
      <div>
        <p style="text-align: left;font-size: 16px;color: orange">请填写收货地址</p>

        <div class="label">
          <div class="left">收货人姓名</div>
          <input type="text" v-model="recName">
        </div>
        <div class="label">
          <div class="left">收货人电话</div>
          <input type="number" v-model="recPhone">
        </div>
        <div class="label">
          <div class="left">收货地址</div>
          <input type="text" v-model="recAddress">
        </div>
        <div class="label">
          <div class="left">备注</div>
          <input type="text" v-model="notes">
        </div>
        <div style="float: right">
          <el-button type="info" @click="back">取消</el-button>
          <el-button type="success" @click="create">支付</el-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {getCartBook} from "@/api/order";
import {creatOrder} from "@/api/order";

export default {
  name: "Pay",
  data() {
    return {
      bookList: [],
      recName: '',
      recPhone: '',
      recAddress: '',
      notes: '',
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    back() {
      this.$router.push("/cart")
    },
    create() {
      const map = {
        'recName': this.recName,
        'recPhone': this.recPhone,
        'recAddress': this.recAddress,
        'notes': this.notes
      }
      creatOrder(map).then(res => {
        if (res.code !== 200) {
          return this.$message.error("创建订单失败")
        }
        const orderId = res.data.orderId
        this.$router.push({path: '/payment', query: {'orderId': orderId}})
        // this.$message.success("成功")
      })
    },
    fetchData() {
      getCartBook().then(res => {
        if (res.code !== 200) {
          this.$message.error("购物车加载失败")
        }
        this.bookList = res.data.list
        this.bookList = this.bookList.filter(book => {
          return book.checked === true
        })
        if (this.bookList.length === 0) {
          this.$router.push("/cart")
          return this.$message.warning("请先选择要购买的书籍")
        }
      })
    }
  }
}
</script>

<style scoped>
.label input {
  height: 30px;
  width: 300px;
}

.left {
  float: left;
  width: 110px;
  font-size: 20px;
  color: #f61111;
}

.label {
  height: 50px;
  text-align: left;
}

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
