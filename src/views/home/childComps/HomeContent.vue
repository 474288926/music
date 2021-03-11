<template>
  <div class="home-content">
    <div class="fl">
      <show-goods :title="title" tag='热门标签'>
        <goods :playlisthot='playlisthot' />
      </show-goods>
      <show-goods tag="新碟上架">
        <goods-swiper :topalbum='topalbum' ></goods-swiper>
      </show-goods>
      <show-goods tag="榜单">
        <goods-list :toplist="toplist" v-if="flag > 27">
          <good-list-item></good-list-item>
        </goods-list>
      </show-goods>
    </div>
    <div class="fr">
      <log-in />
      <singer :artists="artists" />
      <hot-anchor :djtop="djtop" />
    </div>  
  </div>

</template>

<script>
  import ShowGoods from '../../../components/content/goods/ShowGoods.vue'
  import Goods from '../../../components/content/goods/Goods.vue'
  import GoodsSwiper from '../../../components/content/goods/GoodsSwiper.vue'
  import GoodsList from '../../../components/content/goods/GoodsList.vue'
  import LogIn from './LogIn.vue'
  import Singer from './Singer.vue'
  import HotAnchor from './HotAnchor.vue';
  import GoodListItem from '../../../components/content/goods/GoodListItem.vue'
  
  import { getPlayListHot, getTopAlbum, getTopList, getListDetail, getSongDetail, getArtistList, getArtistDetail, getDjTop, getSongUrl } from '../../../network/home.js'
    
  export default {
    name: 'HomeComtent',
    components: {
      ShowGoods,
      Goods,
      GoodsSwiper,
      GoodsList,
      LogIn,
      Singer,
      HotAnchor,
      GoodListItem
    },
    data() {
      return {
        limit: 8,
        playlisthot: [],
        topalbum: {},
        title: ['华语', '流行', '摇滚', '电子', '民谣'],
        toplist: [],
        artists: [],
        djtop: [],
        flag: 0
      }
    },
    created() {
      this.getPlayListHot()
      this.getTopAlbum()
      this.getTopList()
      this.getArtistList()
      this.getDjTop()
      // this.promise1()
    },
    computed:{
      
    },
    methods:{
      getPlayListHot() {
        getPlayListHot(this.limit).then(res => {
          // console.log(res)
          this.playlisthot = res.result
          // console.log(this.palylisthot)
        })
      },
      
      getTopAlbum() {
        getTopAlbum(this.limit).then(res => {
          this.topalbum = res.albums
          // console.log(this.topalbum)
        })
      },
      getTopList(){
        this.$nextTick(() => {
              getTopList().then(res => {
                res.list.forEach(value => {
                  var ids = []
                  getListDetail(value.id).then(res => {
                    // console.log(res)
                    res.privileges.forEach(id => {
                      ids.push(id.id)
                    })
                    getSongDetail(ids.slice(0, 10)).then(res => {
                      value.songs = res.songs
                      // console.log(res)
                      this.flag++
                    })
                  })
                  
                })
                res.list.slice(0, 3).forEach(v => {
                  this.toplist.push(v)
                  
                })
                
                console.log(this.toplist)
              })
              
        })
      },
      
      getArtistList() {
        getArtistList().then(res => {
          // console.log(res)
          res.artists.forEach(value => {
            this.getArtistDetail(value.id)
          })
          // console.log(this.artists)
        })
      },
      getArtistDetail(value){
        getArtistDetail(value).then(res => {
          // console.log(res)
          this.artists.push(res.data.artist)
        })
      },
      
      getDjTop() {
        getDjTop().then(res => {
          // console.log(res)
          this.djtop = res.toplist
          // console.log(this.djtop)
        })
      },
      
      getSongUrl(id){
        getSongUrl(id).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .home-content{
    display: flex;
    justify-content: center;
    width: 60%;
  }
  .fl{
    width: 79%;
    padding: 20px 20px;
    border: 1px #d5d5d5 solid;
    border-top: none;
  }
  .fr{
    width: 21%;
    border: 1px #d5d5d5 solid;
    border-top: none;    
    border-left: none;
  }
  
</style>
