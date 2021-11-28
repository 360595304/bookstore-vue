<template>
  <div class="content-right">
    <div class="delete">
      <div class="delete-photo"></div>
      <div class="delete-font"><span>订单回收站</span></div>
    </div>
    <div class="buy">
      <table>
        <tr style="background-color: rgb(181,181,181);height: 30px;">
          <td>宝贝</td>
          <td>单价</td>
          <td>数量</td>
          <td>商品操作</td>
          <td>实付款</td>
          <td>交易状态</td>
          <td>交易操作</td>
        </tr>
        <tr style="height: 60px;">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <div class="page">
              <button style="background-color: white;color: gray;;">上一页</button>
            </div>
            <div class="page">
              <button style="background-color: white;">下一页</button>
            </div>
          </td>
        </tr>
        <tr style="background-color: rgb(181,181,181);height: 50px;">
          <td>2021-11-10</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr style="border-top: 1px dashed black;">
          <td style="border-right: 1px dashed black;border-left: 1px dashed black;">
            <div class="book8"></div>
          </td>
          <td style="border-right: 1px dashed black;">
            &yen6.49
          </td>
          <td style="border-right: 1px dashed black;">1</td>
          <td style="border-right: 1px dashed black;">申请售后</td>
          <td style="border-right: 1px dashed black;">
            &yen7.49<br>
            （含运费&yen1.00）
          </td>
          <td style="border-right: 1px dashed black;">交易成功</td>
          <td style="border-right: 1px dashed black;">评价</td>
        </tr>
        <tr style="border-bottom: 1px dashed black;">
          <td style="border-top: 1px dashed black;border-left: 1px dashed black;">保险服务</td>
          <td style="border-top: 1px dashed black;">&yen0.00</td>
          <td style="border-right: 1px dashed black;border-top: 1px dashed black; "></td>
          <td style="border-right: 1px dashed black;"></td>
          <td style="border-right: 1px dashed black;"></td>
          <td style="border-right: 1px dashed black;"></td>
          <td style="border-right: 1px dashed black;"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order"
}
</script>

<style scoped>
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
}

.delete {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  width: 690px;
  margin-left: 50px;
}

.delete-photo {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
}

.delete-font {
  display: inline-block;
}

.buy {
  display: flex;
  width: 690px;
  height: 650px;
  margin-left: 50px;
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

.book8 {
  width: 200px;
  height: 135px;

  background-size: 200px;
  margin-left: 5px;
}

</style>
