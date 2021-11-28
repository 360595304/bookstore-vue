<template>
  <div id="search">

    <div class="s1 bar1">
      <form>
        <input type="text" placeholder="请输入您要搜索的内容...">
        <button type="submit"></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>
#search {
  width: 100%;
  height: 50px;
  margin: 10px auto;
}

.s1 {
  padding: 30px 0;
}

.bar1 {
  background: #ffffff;
}

.bar1 input {
  border: 2px solid #7BA7AB;
  border-radius: 5px;
  background: #F9F0DA;
  color: #9E9C9C;
}

.bar1 button {
  top: 0;
  right: 0;
  background: #7BA7AB;
  border-radius: 0 5px 5px 0;
}

.bar1 button:before {
  content: "\f002";
  font-family: FontAwesome,serif;
  font-size: 16px;
  color: #F9F0DA;
}

* {
  box-sizing: border-box;
}





form {
  position: relative;
  width: 500px;
  margin: 0 auto;
}

input, button {
  border: none;
  outline: none;
}

input {
  width: 100%;
  height: 42px;
  padding-left: 13px;
}

button {
  height: 42px;
  width: 42px;
  cursor: pointer;
  position: absolute;
}
</style>
