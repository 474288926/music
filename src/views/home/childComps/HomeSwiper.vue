<template>
  <div class="home-swiper">
    <swiper :swiperlist="swiperimg"  />
  </div>

</template>

<script>
  import Swiper from '../../../components/common/swiper/Swiper.vue'
  export default {
    name: 'HomeSwiper',
    components: {
      Swiper
    },
    props: {
      swiperimg: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .home-swiper{
    display: flex;
    background-size: 6000px;
    background-position: center center;
    background-image: url(../../../assets/img/swiper/bg.jpg);
    justify-content: center;
    width: 100%;
  }
</style>
