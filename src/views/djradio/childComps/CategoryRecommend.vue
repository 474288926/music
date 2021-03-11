<template>
  <div class="cate-rem">
    <show-goods :tag="tag[index]" v-for="(value, index) in type" :key="index" >
      <div class="div">
       <div class="div-item" v-for="(v, index) in value" :key="index">
          <a class="a">
            <img :src="v.picUrl" alt="">
          </a>
          <div>
            <a class="a1">{{v.name}}</a>
            <p class="p">{{v.rcmdtext}}</p>
          </div>
        </div>
      </div>
    </show-goods>
  </div>
</template>

<script>
  import ShowGoods from '../../../components/content/goods/ShowGoods.vue'
  
  export default{
    name: 'CategoryRecommend',
    components:{
      ShowGoods,
    },
    data(){
      return {
        tag: ['音乐故事', '助眠解压', '侃侃而谈', '情感调频', '创作翻唱', '其他']
      }
    },
    props:{
      type:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .cate-rem{
    padding-left: 3%;
    padding-right: 3%;
    flex-wrap: wrap;
  }
  img{
    width: 100%;
  }
  .div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .div-item{
    display: flex;
    width: 48%;
    margin-top: 30px;
    padding-bottom: 20px;
  }
  .div-item:nth-child(1){
    border-bottom: 1px #e2e2e2 solid;
  }
  .div-item:nth-child(2){
    border-bottom: 1px #e2e2e2 solid;
  }
  .div-item div{
    margin-left: 5%;
    margin-top: 4%;
  }
  .a{
    width: 28%;
  }
  .a1{
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  .p{
    margin-top: 20px;
    color: #999;
  }
</style>
