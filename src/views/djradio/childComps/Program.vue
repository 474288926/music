<template>
  <div class="program">
    <div v-for="(value, index) in list" :key="index" >
      <show-goods :tag="tag[index]">
        <ul>
          <li class="li" v-for="(v, index) in value" :key="index">
            <a class="a" href=""><img :src="v.coverUrl" alt=""><i style="display: none;">播放</i></a>
            <div class="div">
              <h3>{{v.name}}</h3>
              <p>{{v.radio.name}}</p>
            </div>
            <a class="a1">{{v.radio.category}}</a>
          </li>
        </ul>
      </show-goods>
    </div>
  </div>
</template>

<script>
  import ShowGoods from '../../../components/content/goods/ShowGoods.vue'
  
  export default{
    name: 'Program',
    components:{
      ShowGoods
    },
    data(){
      return {
        tag: ['推荐节目', '节目排行榜']
      }
    },
    props:{
      list:{
        type: Array,
        default(){
          return []
        }
      },
      djprogramtoplisthours:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .program{
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    font-family:Verdana;
    /* background-color: red; */
    /* width: 40%; */
  }
  .program div{
    width: 45%;
  }
  .li{
    display: flex;
    align-items: center;
    border-left: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
  }
  .li:hover{
    background-color: #e5e5e5;
  }
  .li:nth-child(odd):hover{
    background-color: #e5e5e5;
  }
  .li:nth-child(odd){
    background-color: #f5f5f5;
  }  
  .li img{
    width: 70%;
    display: flex;
    flex-direction: row;
  }
  .a{
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    display: flex;
    width: 15%;
    /* background-color: red; */
  }
  .div{
    margin-left: -2%;
    flex-grow:2;
  }
  .div h3{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .div p{
    margin-top: 5px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .a1{
    width: 20%;
    padding-left: 5px;
  }
</style>
