<template>
  <div id="artist">
    <div class="artist">
      <artist-fl />
    </div>
  </div>
</template>

<script>
  import ArtistFl from './childComps/ArtistFl.vue'
  
  export default{
    name: 'Artist',
    components:{
      ArtistFl
    }
  }
</script>

<style scoped>
  #artist{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .artist{
    width: 50%;
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    border-bottom: #d5d5d5 1px solid;
  }
</style>
