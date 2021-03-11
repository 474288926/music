<template>
      <div class='card'>
          <a :title='item.name' @click="click()">
            <img :src="item.picUrl" class="image">
          </a>
          <div class="nb">
           <a class="el-icon-video-play" title="播放" ></a>
            <span class="fr">{{item.playCount}}</span>
            <span class="el-icon-headset"></span>
          </div> 
          <p class="dec" :class="{dechd: onoff == true}">
            <a :title="item.name" @click="click()">
            {{item.name}}
            </a>
          </p>
          <p v-show="onoff == true" class="dechd">by: <a @click="click()">{{item.nickname}}</a></p>    
      </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props:{
      item:{
        type: Object,
        default(){
          return {}
        }
      },
      onoff:{
        type: Boolean,
        default: false
      }
    },
    methods:{
      click(){
        this.$router.push({
          path:'/playlist',
          query:{
            id: this.item.id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card{
    width: 18%;
    margin: 20px 20px;
    height: 100%;
  }
 .nb{
    background: rgba(204, 204, 204, 0.4);
    border-top:1px #c1c1c1 solid ;
    margin-top: -29px;
    display: flex;
    height: 24px;
    padding: 2px 5px;
    justify-content:space-between;
    position: relative;
    z-index: 100;
  }
  .nb a{
    text-decoration:none;
  }
  .el-icon-video-play{
    font-size: 18px;
    flex: 1;
  }
  .el-icon-headset{
    font-size: 18px;
  }
  .fr{
    line-height: 20px;
    flex: 1;
    text-align: right;
    padding-right: 5px;
  }
  .dec{
    padding-top: 10px;
    padding-bottom: 3px;
  }
  .dechd{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-family:Verdana;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>
