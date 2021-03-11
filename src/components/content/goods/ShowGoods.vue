<template>
  <div class="show-goods">
      <nav-bar>
        <template #left>
          <h1 style="font-size: 20px; font-weight: bold;" ><i class="el-icon-s-help" style='color:red; margin-right: 10px;'></i>{{tag}}</h1>
        </template>
        <template #conter>
            <div class="space-item" v-for="(value, index) in title" :key="index">
              <a href="">{{value}}</a>
            </div>
        </template>
        <template #right>
          <el-link type="info" :underline="false">更多</el-link>
        </template>
      </nav-bar>
      <hr class="hr">
  </div>
  <div class="footer"><slot></slot></div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'
  export default {
    name: 'ShowGoods',
    components: {
      NavBar
    },
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      },
      tag: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .show-goods{
    
  }
  .footer{
    margin-bottom: 20px;
  }
>>>.conter{
    display: flex ;
    align-items: center ;
    flex: 1;
  }
  .space-item{
    margin-left: 20px;
    margin-right: 10px;
  }
  .space-item a{
    color: #a5a5a5;
  }
  >>>.right{
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }  
  .hr{
    height: 2px;
    background-color:#b40909; 
    border: none; 
    margin-top: 15px; 
    width: 100%;
  }
</style>
