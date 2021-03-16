<template>
  <div class="goods-swiper">
      <el-carousel :interval="5000" height="150px" indicator-position="none">
        <el-carousel-item v-for="item in 4" :key="item">
          <ul>
            <li v-for="(item, index) in topalbum" :key="index">
                <div style=" width: 118px; height: 100px; position: relative;" @mouseenter="mouseover(item)" @mouseleave="mouseout(item)">
                  <img :src="item.blurPicUrl">
                  <a class="at" href=""></a>
                  <a v-if="videoplay === item" herf="" class="el-icon-video-play" ></a>
                </div>
                <p><a :title="item.name" href="" >{{item.name}}</a></p>
                <p>
                <a v-for="(value, index) in item.artists" :key="index" :title="value.name" href="">{{value.name}}&nbsp;</a>
                </p>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>

  export default {
    name: 'GoodsSwiper',
    components: {
    },
    data() {
      return {
        videoplay: false,
        swiperimg: [{url:require("../../../assets/img/swiper/swiper1.jpg")}, {url:require("../../../assets/img/swiper/swiper2.jpg")}, {url:require("../../../assets/img/swiper/swiper3.jpg")}]
      }
    },
    props: {
      topalbum: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      mouseover(item){
        this.videoplay = item
      },
      mouseout(){
        this.videoplay = false
      }
    }
  }
</script>

<style scoped>
  .goods-swiper{
    margin-top: 20px;
    background-color: #f5f5f5;
    padding: 3% 3%;
    border: #cfcfcf 0.5px solid;
  }
  .el-carousel__item ul{
    display: flex;
  }
  .el-carousel__item ul li{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 8px;
    margin-right: auto;
  }
  .el-carousel__item ul li p{
    width: 118px;
    vertical-align:bottom;
    text-align:  left;
    white-space: nowrap;/*强制在一行显示*/
    text-overflow:ellipsis;/*设置超出内容显示...*/
    overflow: hidden;
    font-family:Verdana;
  }
  .at{
    display: block;
    width: 100%;
    height: 100%;
    background-color: #9B0909; 
    background: url(../../../assets/img/test/coverall.png) no-repeat;
    position: absolute;
    left: 0;
    top: 0;
  }
  .el-icon-video-play{
    font-size: 25px; 
    position: absolute; 
    right: 20px; 
    bottom: 5px; 
    color: #cccccc; 
    text-decoration: none;
    border-radius: 50px;
  }
  .el-icon-video-play:hover{
    background-color: rgb(0, 0, 0, 0.4);
  }
  img {
    width: 88%;
    height: 100%;
  }
</style>
