<template>
  <em v-if="isActive" class="sub-em active" ><slot></slot></em>
  <em v-else class="sub-em" ><slot></slot></em>
</template>

<script>
  export default{
    name: 'SubNavItem',
    props:{
      path: String
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
  }
</script>

<style scoped>
  .sub-em{
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    display: block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 0 auto;
    color: #fff;
  }
  .sub-em:hover{
    background-color: #9b0909;
  }
  .active{
    background-color: #9b0909;
  }
</style>
