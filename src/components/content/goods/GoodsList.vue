<template>
  <div class="goods-list" v-if="Object.keys(toplist).length !== 0">
    <ul v-for="(value, index) in toplist" :key="index">
      <div class='top'>
        <div class="top-img"><a href=""><img :src="value.coverImgUrl" alt=""></a></div>
        <div class="top-item">
          <div class="mt"><a href="">{{value.name}}</a></div>
          <div class="mb"><a href="" class="el-icon-video-play"></a><a href="" class="el-icon-folder-add"></a></div>
        </div>
      </div>
      <li v-for="(item, index) in value.songs" :key="index">
        <span>{{index+1}}</span>
        <a href="" :style="active">{{item.name}}</a>
        <div class="list" ><slot></slot></div>
      </li>
      <li ><a href="" style="text-align: right; margin-right: 10px; font-weight: 200px;">查看全部 ></a></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'GoodsList',
    data() {
      return {
          current: 0,
          isshow: false,
          active: ''
      }
    },
    props: {
      toplist: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    watch:{
      toplist:{
        deep: true,  // 深度监听
        handler(newVal,oldVal) {
          // console.log(newVal,oldVal)
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list{
    margin-top: 20px;
    background-color: #f5f5f5;
    /* border: #e1e1e1 0.5px solid; */
    display: flex;
  }
  .goods-list ul{
    flex: 1;
    display: flex-wrap;
    text-align: center;
    border: #d4d4d4 1px solid;
  }
  .goods-list ul li{
    background-color: #e8e8e8;
    display: flex;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
  .list{
    display: none;
  }
  .goods-list ul li:hover .list{
    display: block;
  }
  .goods-list ul li a{
    color: #000000;
    flex: 1;
    text-align: left;
    padding-left: 10px;
    font-family:Verdana;
    text-overflow:ellipsis;overflow: hidden;
  }
  .goods-list ul li span{
    margin-left: 30px;
    font-size: 16px;
  }
  .goods-list ul li:nth-child(-n+4) span{
    color: #c10d0c;
  }
  
  .goods-list ul li:nth-child(even){
    background-color: #f5f5f5;
  }
  .goods-list ul:nth-child(2){
    border-left: none;
    border-right: none;
  }
  .top{
    display: inline-flex;
    padding: 20px 0;
  }
  .top-img{
    box-shadow: 0 3px 5px #2B2B2B;
  }
  .top-img img{
    width: 80px;
  }
  .top-item{
    padding: 10px 10px;
  }
  .mb a{
    font-size: 30px;
    text-decoration: none;
    color: #ccc;
    margin-left: 10px;
  }
  .mb a:hover{
    color: #555555;
  }
  .mt{
    font-weight: bold;
    font-size: 14px;
  }
  .mt a{
    color: #000000;
  }
  .mb{
   margin-top: 10px;
  }
  @media only screen and (max-width: 960px) {
    .top{
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
    }
    .top-item{
      padding: 10px 0;
    }
    .goods-list ul li span{
      margin-left: 0;
    }
  }
</style>
