<template>
  <div id="top-list">
    <div class='top-list'>
      <div class="fl">
        <top-fl :list="toplist1" title='云音乐特色榜'  @abc = 'activelist' />
        <top-fl :list="toplist2" title='全球媒体榜'  @abc = 'activelist'/>
      </div>
      <div class="fr">
        <top-list-content :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
  import TopFl from './childComps/TopFl.vue'
  import TopListContent from './childComps/TopListContent.vue'
  
  import { getTopList, getListDetail, getSongUrl, listDetail, getLyric } from '../../network/toplist.js'
  export default{
    name: 'TopList',
    components:{
      TopFl,
      TopListContent
    },
    data(){
      return {
        list: {},
        toplist: [],
        id: ''
      }
    },
    mounted() {
      this.getTopList()
      this.getList()
    },
    created() {
      
    },
    computed:{
      toplist1(){
        return this.toplist.slice(0, 4)
      },
      toplist2(){
        return this.toplist.slice(4, this.toplist.length)
      }
    },
    methods:{
      getTopList(){
        getTopList().then(res => {
          this.toplist = res.list
        })
      },
      getList(value = 19723756){

            getListDetail(value).then(res => {
              this.list = new listDetail(res.playlist) 
              this.list.tracks.forEach(value => {
                let id = value.id
                getSongUrl(id).then(res => {
                    res.data.forEach(v => {
                      value.audioUrl = v.url
                    })
                })
                getLyric(id).then(res => {
                  if(res.lrc) {
                    value.lyric = res.lrc
                  }
                })
              })
              // console.log(this.list)
            })

        },
        
        activelist(id){
          this.getList(id)
        }
        
    }
  }
</script>

<style scoped>
  #top-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .top-list{
    display: flex;
    justify-content: center;
    width: 50%;
    border-bottom: #d5d5d5 1px solid;
  }
  .fl{
    padding-top: 40px;
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    width: 25%;
  }
  .fr{
    flex: 1;
    border-right: #d5d5d5 1px solid;
    padding: 3% 3%;
  }
</style>
