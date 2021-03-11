<template>
  <el-carousel :interval="4000" :type="type" :height="height" :indicator-position="indicatorposition">
    <el-carousel-item v-for="(img, index) in swiperlist" :key="index">
      <h3 class="medium"><img :src="img.url" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default{
    name: 'Swiper',
    props:{
      swiperlist:{
        type: Array,
        default() {
          return []
        }
      },
      type: {
        type: String,
        default: 'card'
      },
      indicatorposition: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    methods:{

    },
    created() {
      console.log(this.type)
    }
  }
</script>

<style scoped>
  .el-carousel{
    width: 60%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item h3 img{
    height: 200px;
    width:100%;
  }
  
 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }   
</style>
