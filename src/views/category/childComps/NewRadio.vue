<template>
  <div class="new-radio">
    <show-goods tag='优秀新电台'>
      <div class="div" :class="{div1: djrecommendtype.length < 5}">
       <div class="div-item" v-for="(v, index) in djrecommendtype" :key="index">
          <a class="a">
            <img class="img" :src="v.picUrl" alt="">
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
    name: 'NewRadio',
    components:{
      ShowGoods
    },
    props:{
      djrecommendtype:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .new-radio{
    padding-left: 3%;
    padding-right: 3%;
    margin-top: 40px;
  }
  .img{
   width: 100%;
  }
  .div{
    display: flex;
    justify-content: space-between;
  }
  .div1{
    justify-content: flex-start;
  }
  .div1 .div-item{
    margin-right: 20px;
  }
  .div-item{
    display: flex;
    flex-wrap: wrap;
    width: 18%;
    margin-top: 30px;
    padding-bottom: 20px;
  }
  .div-item div{
    margin-top: 4%;
  }
  .a{
    width: 100%;
  }
  .a1{
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .p{
    margin-top: 20px;
    color: #999;
  }
</style>
