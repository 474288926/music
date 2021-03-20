<template>
 <div class="home-content">
   <div class="row">
     <div class="fl col-lg-9 col-md-8 col-sm-12 col-sx-12">
         <show-goods :title="title" tag='热门标签'>
           <goods :playlisthot='playlisthot' />
         </show-goods>
         <show-goods tag="新碟上架">
           <goods-swiper :topalbum='topalbum' ></goods-swiper>
         </show-goods>
         <show-goods tag="榜单">
           <goods-list :toplist="toplist" @select="select" @oneplay="oneplay">
           </goods-list>
         </show-goods>
       </div>
       <div class="fr col-lg-3 col-md-4 col-sm-12 col-sx-12">
         <log-in />
         <singer :artists="artists" />
         <hot-anchor :djtop="djtop" />
       </div>  
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
  
  import { mapActions } from 'vuex'
  
  import { getPlayListHot, getTopAlbum, getTopList, getListDetail, getSongDetail, getArtistList, getArtistDetail, getDjTop, getSongUrl, getLyric } from '../../../network/home.js'
    
  export default {
    name: 'HomeComtent',
    components: {
      ShowGoods,
      Goods,
      GoodsSwiper,
      GoodsList,
      LogIn,
      Singer,
      HotAnchor
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
        list: []
      }
    },
    created() {
      this.getPlayListHot()
      this.getTopAlbum()
      this.getTopList()
      this.getArtistList()
      this.getDjTop()
      
      this.$mybus.on('selectItem',value =>{
        getListDetail(value.id).then(res => {
          this.list = res.playlist.tracks
          this.list.forEach(va => {
            this.getSongList(va)
            this.selectPlay({
              list: this.list,
              index: 0
            })
          })
        })
      })
    },
    computed:{
      
    },
    methods:{
      ...mapActions([
        'selectPlay'
      ]),
        
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
          return new Promise((resolve) => {
            getTopList().then(res => {
              resolve(res)
            })
          }).then(value => {          
            value.list.splice(0, 3).forEach(v => {
              let ids = []
              getListDetail(v.id).then(d => {
                d.privileges.forEach(c => {
                  ids.push(c.id)
                })
                getSongDetail(ids.slice(0, 10)).then(f => {
                  v.songs = f.songs
                  v.songs.forEach(va => {
                    this.getSongList(va)
                  })
                  this.toplist.push(v)
                  this.setCurrentIndex(5)
                })
              }) 
            })    
          })
        })
      },
      
      getArtistList() {
        getArtistList().then(res => {
          res.artists.forEach(value => {
            this.getArtistDetail(value.id)
          })
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
      
      getSongList(va){
        let id = va.id
        getSongUrl(id).then(res => {
            res.data.forEach(v => {
              va.audioUrl = v.url
            })
        })
        getLyric(id).then(res => {
          if(res.lrc) {
            va.lyric = res.lrc
          }
        })
      },
      
      select(value) {
        this.list = value.songs
        this.list.forEach(va => {
          this.getSongList(va)
          this.selectPlay({
            list: this.list,
            index: 0
          })
        })
      },
      
      oneplay(item, index) {
        let arr = this.list.filter(value => {
          return value.id != item.id
        })
        if (arr.length < this.list.length) {
          this.list.forEach(va => {
            this.getSongList(va)
            this.selectPlay({
              list: this.list,
              index: this.list.findIndex(value => {
                return value.id == item.id
              })
            })
          })
        }else {
          this.list.push(item)
          this.selectPlay({
            list: this.list,
            index: this.list.length - 1
          })
        } 
        
        
        
      }
    }
  }
</script>

<style scoped>
  .home-content{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
  }
  .fl{
    padding: 20px 20px;
    border: 1px #d5d5d5 solid;
    border-top: none;
  }
  .fr{
    border: 1px #d5d5d5 solid;
    border-top: none;    
    border-left: none;
  }
  
  @media only screen and (max-width: 960px) {
    .home-content{
      flex-flow: row wrap;
    }
  }
  
</style>
