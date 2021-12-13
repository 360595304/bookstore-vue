<template>
  <div>
    <div class="introduce layout">
      <h1>账户信息</h1>
      <h2>你的名字</h2>
      <h1>uid</h1>
      <h2>123456789</h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserMessage"
}
</script>

<style scoped>
header{
  height: 100%;
  min-heigt:800px;
  background-size: cover;
  position: relative;
  z-index: 2;
}
section .p{
  font-style: inherit;
  width: 70%;
  margin: 200px auto;
}
.contact{
  width: 100%;
  height: 400px;
  background-size: cover;
  box-shadow: 0 2px 4px 1px rgba(0,0,0, 0.1);
  font-size: 20px;
}
.book .buy,
.phone,
.email{
  text-align: left;
  width: 45%;
}
.contact .mine{
  text-align: right;
  display: inline-block;
  width: 45%;
  float: right;
}
.contact .mine textarea{
  margin-top: 20px;
  width: 100%;
  height: 180px;
  font-size: 20px;
}
input[type="from"],
input[type="day"],
input[type="book"],
input[type="buy"],
input[type="buy"],
input[type="phone"],
input[type="email"]
{
  height: 50px;
  width: 50%;
  float: right;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 20px;
}
.submit{
  display: inline-block;
  height: 50px;
  width: 200px;
  margin-top: 50px;

}
.submit > input[type="submit"]{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid darkgoldenrod;
  color: #fff;
  font-size: 20px;
}
footer{
  height: 100px;
}
footer p{
  margin-top: 30px;
  float: left;

}
footer .end{
  float: right;
  margin-top: 30px;

}
footer .end a{
  color: #fdc42e;
}
footer a:hover{
  text-decoration: underline;
}
</style>
