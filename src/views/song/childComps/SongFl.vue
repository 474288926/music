<template>
  <div class="fl" v-if="Object.keys(songdetail).length !== 0">
    <div class="l">
      <img :src="songdetail.al.picUrl" alt="">
      <span class="msk"></span>
    </div>
    <div class="r">
      <div class="hd">
        <i class="el-icon-s-help"></i><div class="title">{{songdetail.name}}</div>
      </div>
      <p style="margin-top: 10px; color: #999;">歌手：<a style="color: blue;">{{songdetail.singer.name}}</a></p>
      <p style="margin-top: 10px; color: #999;">所属专辑：<a style="color: blue;">{{songdetail.al.name}}</a></p>
      <nav-button style="height: 30px; margin-top: 15px;"></nav-button>
      <div style="margin-top: 20px; overflow: hidden;" :style="height">
        <p style="margin-top: 10px;" v-for="(value, index) in songdetail.lrc" :key="index">{{value.text}}</p>
      </div>
      <div style="margin-top: 10px;"  @Click="aclick"><a>展开</a><i class="el-icon-arrow-down"></i></div>
    </div>
  </div>
</template>

<script>
  import NavButton from "../../../components/content/button/NavButton.vue"
  export default{
    name: 'SongFl',
    components:{
      NavButton
    },
    data(){
      return {
        height: 'height: 266px'
      }
    },
    props:{
      songdetail:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      aclick(){
        if(this.height == ''){
          this.height = 'height: 266px'
        }else{
          this.height = ''
        }
      
      }
    }
  }
</script>

<style scoped>
  .fl{
    width: 65%;
    padding: 4% 4%;
    padding-top: 40px;
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    border-bottom: #d5d5d5 1px solid;
    display: flex;
  }
  .l{
    width: 30%;
    position: relative;
    margin-right: 10px;
  }
  .l img{
    width: 130px;
    height: 130px;
    margin: 34px;
  }
  .r{
    flex: 1;
    margin-left: 30px;
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
  .msk{
        width: 206px;
        height: 205px;
        top: -1px;
        left: 1px;
        background: url('../../../assets/img/test/coverall (2).png') no-repeat;
        position: absolute;
  }
</style>
