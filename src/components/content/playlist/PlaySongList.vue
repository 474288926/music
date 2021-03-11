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
        播放：{{list.playCount}}次
      </template>
    </nav-bar>
    <hr style="height: 2px;background-color:#b40909; border: none; margin-top: 8px; ">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>歌曲标题</th>
          <th>时长</th>
          <th>歌手</th>
          <th>专辑</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in list.songs" :key='index' @mouseover="mouseover(index)" @mouseleave="mouseleave">
          <td>
            <div class="hd">
              <span>{{index + 1}}</span><span class="el-icon-video-play" style=" font-size: 18px; margin-left: 5px;"></span>             
            </div>
          </td>
          <td>
            <div class="hd">
              <a style="font-size: 14px;" @click="clickname(index)" >{{value.name}}</a>
            </div>
          </td>
          <td>
            <div style="display: flex;"><p :class="{list: isindex == index}">{{formatSeconds(value.dt)}}</p><good-list-item num='4' :class="{active: isindex == index}" /></div>
          </td>
          <td class="td"><a v-for="(a,index) in value.ar" :key="index">{{a.name}}&nbsp;</a></td>
          <td><a>{{value.al.name}}&thinsp;</a></td>
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
    name: 'TopSongList',
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
        console.log('name')
        this.$router.push({
          path:'/song',
          query:{
            id: this.list.songs[index].id
          }
        })
      },
      formatSeconds(value){
        return moment(value).format('mm:ss')
      },
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
  .table th:nth-child(1){
    width: 10%;
    border-right: #d0d0d0 1px solid;
  }
  .table th:nth-child(2){
    width: 40%;
    border-right: #d0d0d0 1px solid;
  }
  .table th:nth-child(3){
    width: 20%;
    border-right: #d0d0d0 1px solid;
  }
  .table th:nth-child(4){
    width: 20%;
    border-right: #d0d0d0 1px solid;
  }
  .table th:nth-child(5){
    width: 20%;
    border-right: #d0d0d0 1px solid;
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
    align-items: center;
  }
  >>>.list{
    display: none;
  }
  .active{
    display: block;
  }
</style>

