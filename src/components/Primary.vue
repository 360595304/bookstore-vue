<template>
  <div class="primary">
    <div class="type-list">
      <table style="border-collapse: collapse; width: 80%;">
        <tr>
          <td>小说<br>
            <router-link :to="`/search?key=11`" target="_blank">侦探</router-link> / <a href="#">悬疑</a> / <a href="#">推理</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">情感</a> / <a href="#">都市</a>
            &nbsp;&nbsp;
            <a href="#">科幻</a> / <a href="#">魔幻</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">作品集</a>
            <a href="#">外国小说</a>
          </td>

        </tr>
        <tr>
          <td>文艺<br>
            <a href="#">文学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">青春文学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">传记</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">艺术</a>
            <a href="#">动漫</a> / <a href="#">幽默</a>

          </td>

        </tr>
        <tr>
          <td>历史文化<br>
            <a href="#">哲学</a> / <a href="#">宗教</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">历史</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">政治</a> / <a href="#">军事</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">文化</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">社会科学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">古籍</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">法律</a>
          </td>
        </tr>
        <tr>
          <td>经济/管理<br>
            <a href="#">管理</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">经济</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">投资理财</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">市场</a> / <a href="#">营销</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">商务沟通</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">中国经济</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">国际经济</a>
          </td>
        </tr>
        <tr>
          <td>心理/励志<br>
            <a href="#">心理学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">女性心理学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">儿童心理学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">情绪管理</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">职场</a> / <a href="#">人际交往</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">人生哲学</a>
          </td>
        </tr>
        <tr>
          <td>生活<br>
            <a href="#">两性关系</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">亲子</a> / <a href="#">家教</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">旅游</a> / <a href="#">地图</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">烹饪</a> / <a href="#">美食</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">保健</a> / <a href="#">养生</a>
          </td>

        </tr>
        <tr>
          <td>童书<br>
            <a href="#">儿童文学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">启蒙读物</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">少儿英语</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">动漫</a> / <a href="#">图画书</a>

          </td>

        </tr>
        <tr>
          <td>科技/教育<br>
            <a href="#">科普读物</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">计算机</a> / <a href="#">网络</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">自然科学</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">中小学教辅</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">考试</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">外语</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">工具书</a>
          </td>
        </tr>
        <tr>
          <td>原版书<br>
            <a href="#">外文原版书</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">港台图书</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">小语种</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">查看更多</a>
          </td>
        </tr>
      </table>
    </div>
    <div class="show-book">
      <h1 align="center">今日特惠</h1>
      <hr color="red">
      <BookList/>
    </div>
    <div class="best-selling">
      <h1>畅销榜</h1>
      <hr color="red">
      <BookPicList/>
    </div>
  </div>

</template>

<script>
import BookList from "@/components/BookList";
import BookPicList from "@/components/BookPicList";

export default {
  name: "Primary",
  components: {BookPicList, BookList}
}
</script>

<style scoped>
.primary {

}

.type-list {
  width: 18%;
  float: left;
}

.show-book {
  width: 66%;
  height: 100%;
  float: left;
}

.best-selling {
  width: 14%;
  float: left;
  text-align: center;
  margin-left: 20px;
}
</style>
