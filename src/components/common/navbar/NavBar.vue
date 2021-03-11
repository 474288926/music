<template>
  <div id="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="conter"><slot name="conter"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>


</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  #nav-bar{
    display: flex;
    width: 100%;
  }
  .left{
    flex-shrink: 1;
  }
  .right{
    flex-shrink: 1;
  }
  .conter{
    flex-shrink: 1;
  }
</style>
