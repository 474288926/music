<template>
  <div id="cateListBox" v-show="onClick == true">
    <h3><a class="a1"><em>全部风格</em></a></h3>
      <dl v-for="(value, index) in categories" :key="index">
        <dt><i></i>{{categ[index]}}</dt>
        <dd ><a v-for="(i, index) in value" :key="index" @Click="seachClick(i.name)">{{i.name}}</a></dd>
      </dl>
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>
  </div>
</template>

<script>
  export default{
    name: 'CateBox',
    data(){
      return {
        categ: ['语种', '风格', '场景', '情感', '主题']
      }
    },
    props:{
      categories: {
        type: Array,
        default(){
          return []
        }
      },
      onClick: {
        type: Boolean,
        default: false
      }
    },
    methods:{
      seachClick(value){
        this.$emit('categlist', value)
        this.$mybus.emit('categname', value)
        // console.log(value)
      }
    }
  }
</script>

<style scoped>
  #cateListBox{
    position: absolute;
    left: -25px;
    top: 50px;
    width: 70%;
    background-color: white;
    z-index: 999;
    border: 1px #CCCCCC solid;
    border-radius: 10px;
    box-shadow: #000000;
    box-shadow: 0px 1px 10px #cacaca;
  }
  #cateListBox h3{
    height: 30px;
    margin-top: 20px;
    border-bottom: 1px #dddddd solid;
  }
  .a1{
    font-size: 14px;
    color: #333;
    font-family:Verdana;
    border: 1px #CCCCCC solid;
    padding: 4px 10px;
    background-image: linear-gradient(#f9f9f9, #ebebeb);
    font-size: 12px;
    border-radius: 5px 5px;
    margin-left: 30px;
  }   
  dl{
    width: 100%;
    line-height: 2em;
    display: flex;
  }
  dt{
    width: 20%;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    border-right: 1px #dddddd solid;
    padding-top: 15px;
  }
  dd{
    flex: 1;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 15px;
  }
  dd a{
    margin-left: 5px;
    margin-right: 5px;
  }  
</style>
