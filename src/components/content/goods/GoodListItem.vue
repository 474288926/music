<template>
  <div class="list">
    <a v-show="num >= 1"  class="el-icon-video-play" @click="play"></a>
    <a v-show="num >= 2"  class="el-icon-plus"></a>
    <a v-show="num >= 3"  class="el-icon-folder-add"></a>
    <a v-show="num >= 4"  class="el-icon-download"></a>
  </div>
</template>

<script>
  export default{
    name: 'GoodListItem',
    props:{
      num:{
        type: String,
        default: '3'
      }
    },
    methods:{
      play() {
        this.$emit('oneplay')
      }
    }
  }
</script>

<style scoped>
  .list{
    flex: 1;
    text-align: left;
    margin-right: 10px;
    font-size: 18px;
  }
  .list a{
    text-decoration: none;
    margin-left: 2px;
    color: #000000;
  }
  .list a:hover{
    color: #777777;
  }
</style>
