<template>
  <div class="content" v-if="Object.keys(list).length !== 0">
    <nav-bar>
      <template #left>
        <h1>{{title}}</h1>
      </template>
      <template #conter>
        <div>{{list.songs.length}}首歌</div>
      </template>
      <template #right>
        播放：{{list.subCount}}次
      </template>
    </nav-bar>
    <hr style="height: 2px;background-color:#b40909; border: none; margin-top: 8px; ">
    <table class="table">
      <tbody>
        <tr v-for="(value, index) in list.songs" :key='index' @mouseover="mouseover(index)" @mouseleave="mouseleave">
          <td>
            <div class="hd">
              <span>{{index + 1}}</span>            
            </div>
          </td>
          <td>
            <div class="hd">
              <span class="el-icon-video-play" style=" font-size: 18px; margin-left: 5px;"></span>
              <a :class="{list1: isindex == index}" class="a" @click="clickname(index)" >{{value.name}}</a>
              <div><good-list-item num='4' :class="{active: isindex !== index}" /></div>
            </div>
          </td>
          <td>
            <div>
              <p >播放&nbsp;{{value.listenerCount}}</p>
            </div>
          </td>
          <td class="td"><p>赞&nbsp;{{value.likedCount}}</p></td>
          <td><p>{{formatDate(value.scheduledPublishTime)}}</p></td>
          <td><p>{{formatSeconds(value.mainSong.bMusic.playTime)}}</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import NavBar from '../../common/navbar/NavBar.vue'
  import GoodListItem from '../goods/GoodListItem.vue'
  
  import moment from 'moment'
  
  export default{
    name: 'RadioSongList',
    components:{
      GoodListItem,
      NavBar
    },
    data(){
      return {
        isactive: true,
        isindex: null,
      }
    },
    props:{
      list: {
        type: Object,
        default(){
          return {}
        }
      },
      title:{
        type: String,
        default(){
          return '歌曲列表'
        }
      }
    },
    methods:{
      mouseover(index){
        // console.log(index)
        this.isindex = index
        this.isactive = false
      },
      mouseleave(){
        this.isindex = null
        this.isactive = true
      },
      clickname(index){
        // console.log(this.list)
        this.$router.push({
          path:'/program',
          query:{
            id: this.list.songs[index].id
          }
        })
      },
      formatDate(value) {
        return moment(value).format('YYYY-MM-DD');
      },
      formatSeconds(value){
        return moment(value).format('mm:ss')
      }
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 40px;
    margin-bottom: 40px;
  }
  >>>.left{
    width: 18%;
    line-height: 2em;
  }
  .left h1{
    font-size: 24px;
    color: #000000;
    font-weight: 500;
  }
  >>>.conter{
    flex: 1;
    line-height: 2em;
    margin-left: 10px;
  }
  >>>.right{
    flex: 1;
    text-align: right;
    line-height: 2em;
  }
  .table{
    border: #d0d0d0 1px solid;
    border-top: none;
    width: 100%;
    height: 100%;
    font-family:Verdana;
    table-layout: fixed;
  }
  .table th{
    line-height: 18px;
    height: 18px;
    padding: 8px 10px;
    color: #c6c6c6;
    font-weight: 500;
    background-image: linear-gradient(#ffffff, #f9f9f9);
    border-bottom: #d0d0d0 1px solid;
  }
  .table td:nth-child(1){
    width: 5%;

  }
  .table td:nth-child(2){
    width: 40%;

  }
  .table td:nth-child(3){
    width: 15%;

  }
  .table td:nth-child(4){
    width: 8%;

  }
  .table td:nth-child(5){
    width: 15%;
  }
  .table td:nth-child(6){
    width: 8%;
  }
  .table td{
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis;
    padding-left: 5px;
  }
  .table tbody tr{
    background-color: #ffffff;
  }
  .table tbody tr:nth-child(odd){
    background-color: #f5f5f5;
  }
  .hd{
    padding: 8px 10px;
    display: flex;
    line-height: 100%;
    text-align: left;
    align-items: center;
  }
  .hd .a{
    font-size: 14px;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .list1{
    text-overflow:ellipsis;
    overflow: hidden;
    width: 70%;
  }
  .active{
    display: none;
  }  
</style>
