<template>
  <div class="fr">
      <singer-list title="你可能也喜欢" :onoff="false" v-if="Object.keys(list).length !== 0" :list="list" />
  </div>
</template>

<script>
  import SingerList from '../../../components/content/singer/SingerList.vue'
  export default{
    name: 'RadioDetailFr',
    components:{
      SingerList
    },
    props:{
      list: {
        type: Array,
        default(){
          return []
        }
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
  .fr{
    width: 25%;
    border-top: none;    
    border-left: none;
  }
</style>
