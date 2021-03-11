<template>
  <div class="fl" v-if="Object.keys(list).length !== 0">
    <div class="l">
      <img :src="list.picUrl" alt="">
    </div>
   <div class="r">
      <div class="hd">
        <i class="el-icon-s-help"></i><div class="title">{{list.name}}</div>
      </div>
      <div class="user">
        <div><img :src="list.dj.avatarUrl" alt=""></div>
        <span><a>{{list.dj.nickname}}</a></span>
        <img v-if="list.dj.avatarDetail !== null" :src="list.dj.avatarDetail.identityIconUrl" alt="">
      </div>
      <div style="margin-top: 20px; overflow: hidden; padding-top: 1%;" :class="{height: ct > 3}">
        <b class="b">{{list.category}}</b>
        <p ref='p' style="margin-top: 10px; font-family: Arial, Helvetica, sans-serif;" v-for="(value, index) in list.desc" :key="index">{{value}}</p>
      </div>
      <div v-if="list.desc.length > 3" style="margin-top: 10px; float: right;" @Click="aclick">
        <a ref="a" style="color: #0c73c2;">展开</a>
        <i ref="i" class="el-icon-arrow-down"></i>
      </div>
    </div>
    <radio-song-list :list="list" title="节目列表"/>
  </div>
</template>

<script>
  import RadioSongList from '../../../components/content/playlist/RadioSongList.vue'
  
  export default{
    name: 'RadioDetailFl',
    components:{
      RadioSongList
    },
    data(){
      return {
        count: 1
      }
    },
    props:{
      list:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      ct(){
        return this.count * this.list.desc.length
      }
    },
    methods:{
      aclick(){
        if(this.count == 0){
          this.$refs.a.innerText = '展开'
          this.$refs.i.className = 'el-icon-arrow-down'
          this.count = 1
        }else{
          this.$refs.a.innerText = '收起'
          this.$refs.i.className = 'el-icon-arrow-up'
          this.count = 0
        }
      }
    },
    watch:{
      list:{
        deep: true,  // 深度监听
        handler(newVal,oldVal) {
           // console.log(newVal,oldVal)
        }
      }
    }
  }
</script>

<style scoped>
  .fl{
    width: 66%;
    padding: 4% 4% 4% 4%;
    border-right: #d5d5d5 1px solid;
    display: flex;
    flex-wrap: wrap;
  }
  .l{
    width: 30%;
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
  .btn{
    border: 1px #CCCCCC solid;
    color: #949494;
    padding: 4px 12px;
    background-image: linear-gradient(#f9f9f9, #ebebeb);
    margin-right: 5px;
    font-size: 12px;
    border-radius: 15px 15px;
    margin-left: 5px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }
  .height{
    height: 90px;
  }
</style>
