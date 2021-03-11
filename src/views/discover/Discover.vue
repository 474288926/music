<template>
  <div id="discover">
    <div class="discover">
      <hearder :categories="categories" @page='page'>
        <goods :playlisthot="playlistslice(playlisthot, limit, offset)" :onoff='true'></goods>
        <el-pagination
          @current-change="currentchange"
          layout="prev, pager, next"
          :total="total/2">
        </el-pagination>
      </hearder>
    </div>
  </div>
</template>

<script>
  import Hearder from './childComps/Hearder.vue'
  import Goods from "../../components/content/goods/Goods.vue"
  
  import { getTopPlayList, PlayList, getCatList, getSearch } from '../../network/discover.js'
  
  export default{
    name: 'Discover',
    components:{
      Goods,
      Hearder
    },
    data(){
      return {
        playlisthot: [],
        total: null,
        limit: 0,
        offset: 20,
        onClick: false,
        categories: [],
        yz: [],
        fg: [],
        cj: [],
        qg: [],
        zt: []
      }
    },
    computed:{

    },
    created() {
      this.getTopPlayList(200)
      this.getCatList()
      this.$mybus.on('categname',value =>{
        this.getSearch(value)
        // console.log(value)
      })
    },
    methods:{
      getTopPlayList(limit){
          getTopPlayList(limit).then(res => {
            res.playlists.forEach(value => {
              this.playlisthot.push(new PlayList(value) )
            })
            this.total = this.playlisthot.length
            // console.log(this.total)
          })
      },
      
      playlistslice(value, limit, offset){
         return value.slice(limit, offset)
      },
      
      currentchange(val){
        this.limit = (val - 1)*20
        this.offset = val*20
        // console.log(val)
      },
      
      getCatList(){
        getCatList().then(res => {
          res.sub.forEach(value => { 
            switch(value.category){
              case 0: 
              this.yz.push(value)
              break;
              case 1:
              this.fg.push(value)
              break;
              case 2:
              this.cj.push(value)
              break;
              case 3:
              this.qg.push(value)
              break;
              case 4:
              this.zt.push(value)
              break;
            }
          })
          this.categories.push(this.yz)
          this.categories.push(this.fg)
          this.categories.push(this.cj)
          this.categories.push(this.qg)
          this.categories.push(this.zt)
          
          // console.log(this.categories)
        })
      },
      
      getSearch(keywords){

        getSearch(keywords).then(res => {
          this.playlisthot = []
          res.result.playlists.forEach(value => {
            
            this.playlisthot.push(new PlayList(value) )
          })
          this.total = this.playlisthot.length
          // console.log(this.playlisthot)
        })
      }
    }
  }
</script>

<style scoped>
  #discover{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .discover{
    display: flex;
    justify-content: center;
    width: 50%;
    flex-wrap: wrap;
    padding-top: 20px;
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    border-bottom: #d5d5d5 1px solid;
  }
  
  >>>.card{
    width: 15%; 
  }
  .el-pagination{
    text-align: center;
  }
</style>
