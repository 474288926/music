<template>
  <div id="home">
    <home-swiper :swiperimg="swiperimg" />
    <home-content />
    <el-backtop target="#home"></el-backtop>
  </div>
  
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeContent from './childComps/HomeContent.vue'
  
	export default {
		name: 'Home',
    components: {
      HomeSwiper,
      HomeContent
    },
    data() {
      return {
        swiperimg: [{url:require("../../assets/img/swiper/swiper1.jpg")}, {url:require("../../assets/img/swiper/swiper2.jpg")}, {url:require("../../assets/img/swiper/swiper3.jpg")}]
      }
    },

	}
</script>

<style scoped>
#home{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
