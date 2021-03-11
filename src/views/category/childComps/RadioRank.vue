<template>
  <div class="radio-rank">
    <show-goods tag="电台排行榜">
      <div class="div">
       <div class="div-item" v-for="(v, index) in djradiohot" :key="index">
          <a class="a" @click="click(index)">
            <img :src="v.picUrl" alt="">
          </a>
          <div>
            <a class="a1" @click="click(index)">{{v.name}}</a>
            <div style="margin-top: 10px; display: flex; align-items: center;">
              <i class="el-icon-user" style="margin-right: 5px; font-size: 14px;"></i>
              <a>{{v.dj.nickname}}</a>    
            </div>
            <p class="p">共{{v.programCount}}期&nbsp;订阅{{v.subCount}}次</p>
          </div>
        </div>
      </div>
    </show-goods>
  </div>
</template>

<script>
  import ShowGoods from '../../../components/content/goods/ShowGoods.vue'
  export default{
    name: 'RadioRank',
    components:{
      ShowGoods
    },
    props:{
      djradiohot:{
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      click(index){
        this.$router.push({
          path:'/radiodetail',
          query:{
            id: this.djradiohot[index].id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .radio-rank{
    padding-left: 3%;
    padding-right: 3%;
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
