<template>
  <div class="goods">
    <goods-item v-for="(item, index) in playlisthot" :key="index" :item='item' :onoff="onoff"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem.vue'
  export default {
    name: 'Goods',
    components: {
      GoodsItem
    },
    props:{
      playlisthot: {
        type: Array,
        default() {
          return []
        }
      },
      onoff: Boolean
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
