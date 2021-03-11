<template>
  <div class="hearder">
    <div class="title">
      <h1><span class="sp">{{title}}</span><a class="a" @click.stop.prevent="click"><i>选择分类</i><em class="el-icon-arrow-down"></em></a></h1>
      <div class="h">热门</div>
    </div>
    <cate-box :categories="categories" :onClick="onClick" @categlist="categlist" />
    <hr class="hr">
    <slot></slot>
  </div>
</template>

<script>
  import CateBox from "../../../components/content/catebox/CateBox.vue"
  
  export default{
    name: 'Hearder',
    components:{
      CateBox
    },
    data(){
      return {
        onClick: false,
        title: '全部'
      }
    },
    props:{
      categories:{
        type: Array,
        default(){
          return []
        }
      }
    },
    created() {
      // console.log(this.categories)
    },
    methods:{
      click(){
        if(this.onClick == false){
          this.onClick = true
        }else{
          this.onClick = false
        }
      },
      categlist(value){
        this.title = value
        // console.log(value)
      }
    }
    
  }
</script>

<style scoped>
  .hearder{
    width: 94%;
    position: relative;
  }
  .title{
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sp{
    margin-right: 5px;
  }
  .a{
    font-size: 14px;
    color: #0c73c2;
    font-family:Verdana;
    border: 1px #CCCCCC solid;
    padding: 6px 10px;
    background-image: linear-gradient(#f9f9f9, #ebebeb);
    margin-right: 5px;
    font-size: 14px;
    border-radius: 5px 5px;
    margin-left: 5px;
    text-decoration: none;
  }
  h1 a:hover{
    background-image: linear-gradient(#ffffff, #f9f9f9);
  }
  a i{
    margin-right: 5px;
  }
  .h{
    font-size: 14px;
    color: white;
    font-family:Verdana;
    border: 1px #CCCCCC solid;
    padding: 6px 10px;
    background-image: linear-gradient(#ba0000, #910000);
    margin-right: 5px;
    font-size: 14px;
    border-radius: 5px 5px;
    margin-left: 5px;
    text-decoration: none;
  }
  
  .hr{
    width: 100%;
    height: 2px;
    background-color:#b40909; 
    border: none; 
    margin-top: 10px; 
  }
</style>
