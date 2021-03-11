<template>
  <div class="fr" >
    <singer-list title="喜欢这个歌单的人" :onoff="false" v-if="Object.keys(like).length !== 0">
      <div class="like">
        <a v-for="(value, index) in like" :key="index" >
          <img :src="value.avatarUrl" alt="">
        </a>
      </div>
    </singer-list>  
    <singer-list title="热门歌单" :onoff="false" v-if="Object.keys(list).length !== 0" :list="list" /> 
  </div>
</template>

<script>
  import SingerList from '../../../components/content/singer/SingerList.vue'
  
  export default{
    name: 'PlayListFr',
    components: {
      SingerList
    },
    props: {
      list: {
        type: Array,
        default(){
          return []
        }
      },
      like:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .fr{
    width: 26%;
    border: 1px #d5d5d5 solid;
    border-top: none;    
    border-left: none;
  }
  .like{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .like a{
    margin-left: 4px;
    margin-top: 8px;
  }
  .like img{
    width: 40px;
  }

</style>

