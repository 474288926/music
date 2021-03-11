<template>
  <div class="fl" v-if="Object.keys(list).length !== 0">
    <div class="l">
      <img :src="list.coverImgUrl" alt="">
    </div>
    <div class="r">
      <div class="hd">
        <i class="el-icon-s-help"></i><div class="title">{{list.name}}</div>
      </div>
      <div class="user">
        <div><img :src="list.creator.avatarUrl" alt=""></div>
        <span><a>{{list.creator.nickname}}</a></span>
        <img v-if="list.creator.avatarDetail !== null" :src="list.creator.avatarDetail.identityIconUrl" alt="">
        <span style="margin-left: 15px; color: #cccccc;">{{formatDate(list.createTime)}}&ensp;创建</span>
      </div>
      <nav-button style="height: 30px; width: 90%; margin-top: 15px;"></nav-button>
      <div class="bq"><b>标签：</b><a class="btn" v-for="(value, index) in list.tags" :key="index" ><i>{{value}}</i></a></div>
      <div style="margin-top: 20px; overflow: hidden;" :class="{height: ct > 3}">
        <b style="display: flex; align-items: flex-end;">介绍: </b>
        <p ref='p' style="margin-top: 10px; font-family: Arial, Helvetica, sans-serif;" v-for="(value, index) in list.description" :key="index">{{value}}</p>
      </div>
      <div v-if="list.description.length > 3" style="margin-top: 10px; float: right;" @Click="aclick"><a ref="a" style="color: #0c73c2;">展开</a><i ref="i" class="el-icon-arrow-down"></i></div>
    </div>
    <play-song-list style="width: 100%;" :list="list"/>
  </div>
  
</template>

<script>
  import NavButton from "../../../components/content/button/NavButton.vue"
  import PlaySongList from '../../../components/content/playlist/PlaySongList.vue'
  
  import moment from 'moment'
  
  export default{
    name: 'PlayListFl',
    components:{
      NavButton,
      PlaySongList
    },
    data(){
      return {
        count: 1
      }
    },
    props:{
      list: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      ct(){
        return this.count * this.list.description.length
      }
    },
    methods:{
      formatDate(value) {
        return moment(value).format('YYYY-MM-DD');
      },
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
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    border-bottom: #d5d5d5 1px solid;
    display: flex;
    flex-wrap: wrap;
  }
  .l{
    width: 30%;
    position: relative;
    margin-right: 10px;
    
  }
  .l img{
    padding: 3px 3px;
    border: #d5d5d5 1px solid;
    width: 80%;
  }
  .r{
    flex: 1;
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
  .bq{
    margin-top: 20px;
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
