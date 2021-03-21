<template>
  <div class="top-content">
    <div class="header">
      <img :src="list.img" alt="">
      <div class="header-fr">
        <h1>{{list.name}}</h1>
        <p class="el-icon-time">最近更新时间：{{formatDate(list.updateTime)}}</p>
        <nav-button></nav-button>
      </div>
    </div>
    <top-song-list :list="list" title="歌曲列表" @select="select" />
    <div class="footer">
      <nav-bar>
        <template #left>
          <h1>评论</h1>
        </template>
        <template #conter>
          <div>评论{{list.commentCount}}条</div>
        </template>
      </nav-bar>
      <hr style="height: 2px;background-color:#b40909; border: none; margin-top: 8px; ">
    </div>
  </div>
</template>

<script>
  import NavButton from '../../../components/content/button/NavButton.vue'
  import NavBar from '../../../components/common/navbar/NavBar.vue'
  import TopSongList from '../../../components/content/song/TopSongList.vue'
  
  import { mapActions } from 'vuex'
  
  import moment from 'moment'
  
  export default{
    name: 'TopListContent',
    components:{
      NavButton,
      NavBar,
      TopSongList
    },
    props: {
      list: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      ...mapActions([
        'selectPlay'
      ]),
      formatDate(value) {
        return moment(value).format('YYYY-MM-DD');
      },
      select(value, index){
        this.selectPlay({
          list: this.list.tracks,
          index
        })
      }
    }
  }
</script>

<style scoped>
  .top-content{
  }
  .header{
    display: flex;
    align-items: center;
  }
  .header img{
    background-color: #000000;
    width: 160px;
    height: 160px;
  }
  .header-fr{
    flex: 1;
    padding: 20px 30px;
  }
  .header-fr h1{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .header-fr p{
    margin-top: 10px;
  }
</style>
