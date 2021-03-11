<template>
   <singer-list>
    <ul>
        <li  v-for="(value, index) in artists" :key="index">
          <a href="" class="sc">
          <img :src="value.cover" alt="">
          <div class="sc-item">
            <h4>{{value.name}}</h4>
            <p>{{value.briefDesc}}</p>
          </div>
         </a>
        </li>
      </ul>
      <div class="sd"><a href="">申请成为网易音乐人</a></div>
   </singer-list>
</template>

<script>
  import SingerList from '../../../components/content/singer/SingerList.vue'
  export default{
    name: 'Singer',
    components:{
      SingerList
    },
    props: {
      artists: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .sc{
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    background-color: #fdfdfd;
    text-decoration: none;
  }
  .sc img {
    width: 36%;
    height: 36%;
  }
  .sc-item{
    padding-left: 10px;
    padding-top: 8px;
    line-height: 2;
    width: 100%;
    border: #dedede 1px solid;
    border-left: none;
  }
  .sc-item:hover{
    background-color: #f4f4f4;
  }
  .sc-item h4{
    font-weight: bold;
    color: #000000;
  }
  .sc-item p{
    color: #afafaf;
    width: 120px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-family:Verdana;
  }
  .sd{
    text-align: center;
    border-radius: 5px;
    border: 1px #f0f0f0 solid;
    padding: 8px 0;
  }
  .sd:hover{
    background-color: #fcfcfc;
  }
  .sd a{
    color: #000000;
    font-weight: 800;
  }
</style>
