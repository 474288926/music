<template>
  <div class="fl" v-if="Object.keys(list).length !== 0">
    <div class="l">
      <img :src="list.img" alt="">
    </div>
    <div class="r">
      <div class="hd">
        <i class="el-icon-s-help"></i><div class="title">{{list.name}}</div>
      </div>
      <div class="user">
        <div class="el-icon-service"></div>
        <span><a>{{list.radioname}}</a></span>
      </div>
    </div>
   <div style="margin-top: 20px; padding-top: 1%; display: flex; flex-wrap: wrap; align-items: center;">
      <div class="div">
        <b class="b">{{list.category}}</b>
        <p>{{list.radioname}}&nbsp;第{{list.programCount}}期</p>
        <p>{{list.createTime}}&nbsp;创建</p>
        <p>播放：{{list.listenerCount}}次</p>
      </div>
      <p style="margin-top: 10px; font-family: Arial, Helvetica, sans-serif;" v-for="(value, index) in list.desc" :key="index">{{value}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'ProgramFl',
    props:{
      list:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .fl{
    width: 66%;
    padding: 4% 4%;
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }
  .l{
    width: 20%;
    margin-right: 10px;
  }
  .l img{
    padding: 3px 3px;
    border: #d5d5d5 1px solid;
    width: 100%;
  }
  .r{
    flex: 1;
    margin-left: 3%;
  }
  .hd{
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 100%;
    
  }
  .title{
    font-size: 24px;
    line-height: 1em;
    font-weight: 900;
    margin-left: 5px;
  }
  .user{
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .user div{
    width: 10%;
  }
  .user div img{
    width: 70%;
  }
  .user span{
    line-height: 1em;
    display: flex;
    flex-wrap: nowrap;
  }
  .user span a{
    color: #00aaff;
    font-family: "arial, helvetica, sans-serif";
  }
  .user img{
    margin-left: 3px;
    width: 3%;
  }
  .b{
    color: #C20C0C;
    padding: 1% 1%;
    border: 1px #C20C0C solid;
  }
  .b:hover{
    background:rgba(231, 0, 0, 0.1);
  }
  .div{
    display: flex;
    align-items: center;
    width: 100%;
  }
  .div p{
    margin-left: 10px;
  }
</style>
