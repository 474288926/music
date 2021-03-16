<template>
  <singer-list title="热门主播" :onoff="false">
    <ul>
      <li class="sc"  v-for="(value, index) in djtop" :key="index">
        <a href="" >
        <img :src="value.picUrl" alt="">
        </a>
        <div class="sc-item">
          <a href="">{{value.creatorName}}</a>
          <p>{{value.dj.signature}}</p>
        </div>
      </li>
    </ul>
  </singer-list>

</template>

<script>
  import SingerList from '../../../components/content/singer/SingerList.vue'
  export default{
    name: 'HotAnchor',
    components:{
      SingerList
    },
    props:{
      djtop: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .sc{
    display: flex;
  }
  .sc img{
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
  .sc-item{
    padding-left: 10px;
    padding-top: 8px;
    line-height: 2;
  }

  .sc-item a{
    font-weight: bold;
    color: #000000;
  }
  .sc-item p{
    color: #afafaf;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 150px;
    font-family:Verdana;
  }
  @media only screen and (max-width: 960px) {
    ul{
      display: flex;
      flex-wrap: wrap;
    }
    li{
      margin-right: auto;
    }
  }
</style>
