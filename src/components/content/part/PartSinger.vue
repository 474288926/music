<template>
  <div class="part-singer">
    <a class="el-icon-caret-right" style="font-size: 16px;"></a>
    <a class="el-icon-plus"></a>
  </div>
</template>

<script>
  export default{
    name: 'PartSinger',
  }
</script>

<style scoped>
  .part-singer{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a{
    font-size: 14px;
    text-decoration: none;
  }
</style>
