<template>
  <div class="fr">
  <singer-list title="包含这首歌的歌单" :onoff="false">
    <ul>
      <li class="sc" v-for="(value, index) in relatedplaylist" :key="index" >
        <a style="width: 20%;">
          <img :src="value.coverImgUrl" alt="">
        </a>
        <div class="sc-item">
          <a>{{value.name}}</a>
          <p>by: <a class="sc-item-a">{{value.creator.nickname}}</a></p>
        </div>
      </li>
    </ul>
  </singer-list>
    <singer-list title="相似歌曲" :onoff="false">
      <ul>
        <li class="c" v-for="(value, index) in simisong" :key="index" >
          <div class="l">
            <a style="margin-bottom: 3px;">{{value.name}}</a>
            <div>
              <a style="margin-right: 5px; color: #999 ;" v-for="(i, index) in value.artists" :key="index">{{i.name}}</a>
            </div>
            
          </div>
          <part-singer></part-singer>
        </li>
      </ul>
    </singer-list>
  </div>
</template>

<script>
  import SingerList from '../../../components/content/singer/SingerList.vue'
  import PartSinger from '../../../components/content/part/PartSinger.vue'
  
  export default{
    name: 'SongFr',
    components: {
      SingerList,
      PartSinger
    },
    props: {
      simisong: {
        type: Array,
        default(){
          return []
        }
      },
      relatedplaylist: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .fr{
    flex: 1;
    border: 1px #d5d5d5 solid;
    border-top: none;    
    border-left: none;
  }
  .sc{
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    font-family:Verdana;;
  }
  .sc img{
    width: 100%;
    margin-top: 8px;
  }
  .sc-item{
    width: 75%;
    text-indent: 1em;
    padding-top: 8px;
    line-height: 2;
    display: flex;
    flex-direction: column;
  }
  
  .sc-item-a{
   font-weight: bold;

    color: #000000;
  }
  .c{
    display: flex;
    margin-top: 8px;
  }
  .l{
    width: 77%;
    display: flex;
    flex-direction: column;
    padding-right: 3%;
  }
  a{
    overflow: hidden; 
    white-space: nowrap;
  }
</style>
