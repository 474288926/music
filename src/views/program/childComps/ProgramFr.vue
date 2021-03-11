<template>
  <div class="fr">
    <singer-list title="热门歌单" :onoff="false" v-if="Object.keys(list).length !== 0" :list="list" />
  </div>
</template>

<script>
  import SingerList from '../../../components/content/singer/SingerList.vue'
  
  export default{
    name: 'ProgramFr',
    components:{
      SingerList
    },
    props:{
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
  .fr{
    width: 25%;
    border-left: #d5d5d5 1px solid;
  }
</style>
