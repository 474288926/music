<template>
  <div class="content">
    <nav-bar>
      <template #left>
        <h1>{{title}}</h1>
      </template>
      <template #conter>
        <div>{{list.trackCount}}首歌</div>
      </template>
      <template #right>
        播放：{{list.playCount}}次
      </template>
    </nav-bar>
    <hr>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>标题</th>
          <th>时长</th>
          <th>歌手</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in list.tracks" :key='index' @mouseover="mouseover(index)" @mouseleave="mouseleave">
          <td>
            <div class="hd">
              <span>{{index + 1}}</span><div><span></span></div>              
            </div>
          </td>
          <td>
            <div class="hd">
  
              <el-image v-show="index < 3" :src="value.al.picUrl" alt="" lazy></el-image>
              <span class="el-icon-video-play" style=" font-size: 18px;" @click="selectItem(value, index)"></span>
              <a style="margin-left: 8px; font-size: 14px;" @click="clickname(index)" >{{value.name}}</a>
            </div>
          </td>
          <td>
            <div style="display: flex;"><p :class="{list: isindex == index}">{{formatSeconds(value.dt)}}</p><good-list-item num='4' :class="{active: isindex == index}" /></div>
          </td>
          <td><a  href="" v-for="(a,index) in value.ar" :key="index">{{a.name}}&thinsp;</a></td>
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
          return ''
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
        this.$router.push({
          path:'/song',
          query:{
            id: this.list.tracks[index].id
          }
        })
      },
      formatSeconds(value){
        return moment(value).format('mm:ss')
      },
      selectItem(value, index){
        this.$emit('select', value, index)
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
  .content{
    margin-top: 40px;
    margin-bottom: 40px;
  }
  >>>.left{
    width: 15%;
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
    table-layout: fixed;
    font-family:Verdana;
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
    width: 8%;
    border-right: #d0d0d0 1px solid;
  }
  .table th:nth-child(2){
    width: 60%;
    border-right: #d0d0d0 1px solid;
  }
  .table th:nth-child(3){
    width: 15%;
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
  .hd .el-image{
    width: 2.8125rem;
    margin-right: 8px;
  }
  >>>.list{
    display: none;
  }
  .active{
    display: block;
  }
  hr{
    height: 2px;background-color:#b40909; 
    border: none; 
    margin-top: 8px;
  }
</style>
