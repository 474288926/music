<template>
  <div class="sub-nav">
    <ul class="sub-nav-ul">
      <li class="sub-nav-li" v-for="(value, index) in subnavli " :key="index" @click="onClick(index)">
        <sub-nav-item :path="value.path">
          {{value.name}}
        </sub-nav-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import SubNavItem from './SubNavItem.vue'
  
  export default{
    name: 'SubNav',
    components:{
      SubNavItem
    },
    data() {
      return {
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
</style>
