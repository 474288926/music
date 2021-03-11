<template>
  <home-nav-bar :menulist="data" />
  <sub-nav :subnavli="subnavli" />
  <router-view/>
  <buttom></buttom>
</template>

<script>
  import HomeNavBar from './components/content/home/HomeNavBar.vue'
  import SubNav from './components/content/home/SubNav.vue'
  import Buttom from './components/common/buttom/Buttom.vue'
  
  export default{
    name: 'App',
    components:{
      HomeNavBar,
      SubNav,
      Buttom
    },
    data(){
      return {
        data:['发现音乐', '我的音乐', '朋友', '商城', '音乐人', '下载客户端'],
        subnavli:[{name : '推荐', path : '/home'}, {name : '排行榜', path : '/toplist'}, {name: '歌单', path : '/discover'}, {name: '主播电台', path : '/djradio'}, {name: '歌手', path : '/artist'}, {name:'新碟上架'}]
      }
    }
  }
</script>
<style>
  @import url("./assets/css/base.css");
</style>
