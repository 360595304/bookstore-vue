<template>
  <div class="hot-author">
    <div class="author">
      <h1 align="left">热门作者</h1>
      <hr color="red">
      <div style="height: 600px; width: 200px; text-align: center; border-style: dashed;
			border-width: 1px; background-color: #eeec8ecb; float: left;">
        <a href="#"><img src="img/banner001.jpg" width="198px" height="240px"></a>
        <p>
          江南，本名杨治，1977年7月13日出生于安徽舒城，中国当代作家。2000年，创作出版校园小说《此
          间的少年》。2005年起，陆续出版小说《九州缥缈录》。2009年，出版小说《上海堡垒》；同年10月
          ，在《漫客·小说绘》连载青春幻想小说《龙族》，后陆续出版单行本。2014年，开始创作幻想小说《
          天之炽》；同年，出版随笔集《龙与少年游》。2015年，由人民文学出版社再版《九州缥缈录》系列
          小说。2020年10月，由人民文学出版社再版的《龙族》上市。
        </p>
      </div>
      <div style="float: left; width: 800px; height: 240px; margin-left: 50px;">
        <div style="float: left;"><a href="#"><img src="img/banner002.jpg" width="140px" height="240px"></a></div>
        <div style="float: left; text-align: center; width: 640px; height: 240px; margin-left: 20px;">
          <h3>龙族I</h3>
          <p>
            《龙族Ⅰ：火之晨曦》以一个少年的冒险之旅为故事核心，展现了龙的世界中的神秘与宏大。小说的背
            景是根据北欧神话虚构的，诸神的黄昏是北欧神话里最著名的一场战争，也是神话的结束。而这正是《
            龙族》的开端。著名的黑龙尼德霍格在本书中作为始祖之龙出场，和它的后代龙王们一起，向人类的世
            界发起挑战。于是在龙族复兴的一刻，新时代的英雄们必须从古老神话中学习知识，结合现代的科技，
            再次迎接龙族的挑战。而站在这一翻天覆地的历史关口的主角却是一个再普通不过的少年。
          </p>
        </div>
        <div style="float: left; margin-top: 30px;"><p>好书推荐</p></div>
        <div style="float: left; width: 700px; height: 240px;">
          <table>
            <tr>
              <td>
                <a href="#"><img src="img/banner001.jpg" width="160px" height="240px"></a>
                <p align="center"><a href="#">书名：xxx</a></p>
                <p align="center">价格：xxx</p>
              </td>
              <td width="90px">&nbsp;</td>
              <td>
                <a href="#"><img src="img/banner002.jpg" width="160px" height="240px"></a>
                <p align="center"><a href="#">书名：xxx</a></p>
                <p align="center">价格：xxx</p>
              </td>
              <td width="90px">&nbsp;</td>
              <td>
                <a href="#"><img src="img/banner003.jpg" width="160px" height="240px"></a>
                <p align="center"><a href="#">书名：xxx</a></p>
                <p align="center">价格：xxx</p>
              </td>
              <td width="90px">&nbsp;</td>
              <td>
                <a href="#"><img src="img/banner004.jpg" width="160px" height="240px"></a>
                <p align="center"><a href="#">书名：xxx</a></p>
                <p align="center">价格：xxx</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="other" style="margin-left: 130px ; margin-top: 100px; float: left; width: 12%;">
      <h1 align="center">其他作者</h1>
      <hr color="red">
      <table class="mytable">
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
        <tr>
          <td><a href="#">热销1</a></td>
          <td><a href="#">热销1</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotAuthor"
}
</script>

<style scoped>
.hot-author {
  margin-top: 100px;
}

.author {
  float: left;
  width: 77%;
  margin-top: 100px;
}

.other {
  float: left;
}
</style>
