<template>
  <div class="title">
    <h2>{{title}}</h2>
  </div>
  <ul class='content'>
    <li :class="{hover: ishover === index}" v-for="(value, index) in list" @click='click(index)'  :key='index' @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
      <a :class="{active: isactive === index}"  class="list" >
        <img :src="value.coverImgUrl" alt="">
        <div class="list-item">
          <p>{{value.name}}</p>
          <p>{{value.updateFrequency}}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default{
    name: 'TopFl',
    data(){
      return {
        isactive: null,
        ishover: null,
      }
    },
    emits:['abc'],
    props: {
      list: {
        type: Array,
        default(){
          return []
        }
      },
      title: {
        type: String,
        default: '榜单'
      }
    },
    methods:{
      click(index){
        this.isactive = index
        this.$router.push({
              path: '/toplist',
              query: {
                id: this.list[index].id
              }
        })
        let id =  this.list[index].id
        this.$emit("abc", id)
      },
      mouseenter(index){
        this.ishover = index
      },
      mouseleave(){
        this.ishover = null
      },
      
    }
  }
</script>

<style scoped>
  .title {
    margin-bottom: 5px;
  }
  .title h2 {
    margin-left: 18px;
    font-size: 16px;
    font-weight: bold;
  }
  .active{
    background-color: #CCCCCC;
  }
  .hover{
    background-color: #f4f4f4;
  } 
  .list {
    color: #000000;
    text-decoration: none;
    display: flex;
    padding: 10px 20px;
  }
  .list img {
    width: 2.375rem;
  }
 .list-item {
    margin-left: 10px;
    line-height: 2em;
  }
  .list-item p:nth-child(even){
    color: #B1B1B1;
  }
  .content{
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 960px) {
    .content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    ul li{
      width: 12.5rem;
    }
  }
</style>
