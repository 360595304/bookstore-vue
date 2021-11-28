<template>
  <div>
    <Search/>
    <Shuffling/>
    <div class="main">
      <Primary/>
      <Recommend/>
      <NewBook/>
      <HotAuthor/>
    </div>
  </div>

</template>


<script>
import NewBook from "@/components/NewBook";

import("../assets/js/swiper.min")
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import Shuffling from "@/components/Shuffling";
import Primary from "@/components/Primary";
import Recommend from "@/components/Recommend";
import HotAuthor from "@/components/HotAuthor";
import Footer from "@/components/Footer";

export default {
  name: "index",
  components: {
    Footer,
    HotAuthor,
    NewBook,
    Navigation, Search, Shuffling, Primary, Recommend
  }
}


</script>

<style>
@import "../assets/css/index.css";

.main {
  margin: 40px 100px;
}

.rebang {
  height: 600px;
  width: 100px;
  margin: 0 auto;
}

.rebang th, td {
  text-align: center;
  padding: 8px;
  height: 60px;
}

tr:nth-child(even) {
  background-color: #f2f2f2
}

.mytable {
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  background-color: #f2f2f2;
  border-style: solid;
  border-width: 1px;
  border-color: black;
}

.mytable td {
  border-style: dashed;
  border-width: 1px;
  border-color: black;
}

.mytable td:hover {
  background-color: #9E9C9C;
}

</style>
<style scoped>


body {
  font-size: 0;
}
</style>
