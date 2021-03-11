<template>
  <div id="PlayList">
    <div class="playlist">
      <play-list-fl :list="list" v-if="flag > 0" />
      <play-list-fr :list="relatedplaylist" :like="list.subscribers"/>
    </div>
  </div>
</template>

<script>
  import PlayListFl from "./childComps/PlayListFl.vue"
  import PlayListFr from './childComps/PlayListFr.vue'
  
  import { getListDetail, getSongDetail, getSongUrl, getRelatedPlayList, RelatedPlayList } from '../../network/playlist.js'
  
  export default{
    name: 'PlayList',
    components:{
      PlayListFl,
      PlayListFr
    },
    data(){
      return {
        list: {},
        lyric: [],
        relatedplaylist: [],
        flag: 0
      }
    },
    created() {
      this.getListDetail()
      this.getRelatedPlayList()
    },
    methods:{
      getListDetail(){
        let id = this.$route.query.id
        this.getList(id)
      },
      
      getList(value){
                return new Promise((resolve) => {
                  let ids = []
                  let songs = []
                  let url = []
                  getListDetail(value).then(res => {
                    this.list = res.playlist
                    // console.log(res)
                    res.playlist.trackIds.forEach(id => {
                      ids.push(id.id)
                      // console.log(ids)
                    })
                    getSongDetail(ids).then(res => {
                      // console.log(res)
                      res.songs.forEach(value => {
                        songs.push(value)
                        // console.log(value)
                        this.flag++
                      })
                    })
                    
                    this.list.songs = songs
                    this.formatLyric(this.list.description)
                    this.list.description = this.lyric
                    // console.log(this.list)
                  })
                  
                  resolve()
                })
        },
        getRelatedPlayList(){
          let id = this.$route.query.id
          getRelatedPlayList(id).then(res => {
            res.playlists.forEach(value => {
               this.relatedplaylist.push(new RelatedPlayList(value)) 
            })
            console.log(this.relatedplaylist)
          })
        },
        
        formatLyric(text){
                let arr = text.split('\n');
                arr.forEach(value => {
                  this.lyric.push(value)
                })
                

        },
    }
  }
</script>

<style scoped>
  #PlayList{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .playlist{
    display: flex;
    width: 50%;
  }
</style>
