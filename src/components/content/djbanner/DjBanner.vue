<template>
  <div class="djbanner">
    <ul class="ul">
      <li class="li" v-for="(value, index) in categories" :key="index" @click="click(index)">
        <a class="a">
          <img :src="value.pic56x56Url" alt="">
          <em>{{value.name}}</em>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'DjBanner',
    props:{
      categories:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      click(index){
        let id = this.categories[index].id
        this.$router.push({
          path:'/category',
          query:{
            id: this.categories[index].id
          }
        })
        this.$emit('getCateId', id)
      }
    }
  }
</script>

<style scoped>
 .djbanner{
    /* width: 100%; */
  }
  .ul{
    display: flex;
    flex-wrap: wrap;
  }
  .li{
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .a{
    display: flex;
    color: #333333;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
  .a img{
    width: 60%;
  }
  
</style>
