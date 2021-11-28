<template>
  <div class="shuffling">
    <section class="pc-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-center none-effect">
            <a href="#">
              <img src="http://img3m5.ddimg.cn/57/13/29225055-1_u_23.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="http://img3m5.ddimg.cn/57/13/29225055-1_u_23.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="http://img3m5.ddimg.cn/57/13/29225055-1_u_23.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="http://img3m5.ddimg.cn/57/13/29225055-1_u_23.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="http://img3m5.ddimg.cn/57/13/29225055-1_u_23.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
        </div>
        <div class="button">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Shuffling"
}

window.onload = function () {
  var swiper = new Swiper('.swiper-container', {
    autoplay: false,
    speed: 1000,
    autoplayDisableOnInteraction: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: 2,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    onInit: function (swiper) {
      swiper.slides[2].className = "swiper-slide swiper-slide-active";
    },
    breakpoints: {
      668: {
        slidesPerView: 1,
      }
    }
  });
}
</script>

<style scoped>
.shuffling {
  margin: 20px auto;
}
.swiper-slide img {
  width: 500px;
  height: 300px;
}
</style>
