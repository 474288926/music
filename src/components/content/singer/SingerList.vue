<template>
  <div class="singer">
    <div class="st">
      <h1>{{title}}</h1>
      <a v-show="onoff">查看全部 ></a>
    </div>
    <slot><singer-list-item v-for="(item, index) in list" :key="index" :relatedplaylist="item" /></slot>
  </div>
</template>

<script>
  import SingerListItem from './SingerListItem.vue'
  export default{
    name: 'SingerList',
    components:{
      SingerListItem
    },
    props: {
      title: {
        type: String,
        default:'入驻歌手'
      },
      onoff: {
        type:Boolean,
        default: true
      },
      list:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .singer{
    /* background-color: #C20C0C; */
    padding: 10px 20px 10px 20px;
  }
  .st{
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px #d0d0d0 solid;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .st a{
     color: #7f7f7f;
  }
  .st h1{
   font-weight: bold;
  }
</style>
