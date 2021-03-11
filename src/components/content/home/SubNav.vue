<template>
  <div class="sub-nav">
    <ul class="sub-nav-ul">
      <li class="sub-nav-li" v-for="(value, index) in subnavli " :key="index" @click="onClick(index)"><em class="sub-em" :class="{active: isActive === index}">{{value.name}}</em></li>
    </ul>
  </div>
</template>

<script scoped>
  export default{
    name: 'SubNav',
    data() {
      return {
        isActive: 0
      }
    },
    props: {
      subnavli:{
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      onClick(index) {
        this.isActive = index
        this.$router.push(this.subnavli[index].path)
      }
    }
  }
</script>

<style scoped>
  .sub-nav{
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .sub-nav-ul{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 35px;
    height: 35px;

  }
  .sub-nav-li{
     margin-right: 50px;
  }
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
