<template>
  <div id="song">
    <div class="song-list">
      <song-fl :songdetail="songdetail"></song-fl>
      <song-fr :simisong="simisong" :relatedplaylist="relatedplaylist"></song-fr>
    </div>
  </div>
</template>

<script>
  import SongFl from './childComps/SongFl'
  import SongFr from './childComps/SongFr.vue'
  
  import { getSongDetail, getLyric, getSimiSong, getRelatedPlayList, getSearch, Detail } from '../../network/song.js'
  
  
  export default{
    name: 'Song',
    components:{
      SongFl,
      SongFr
    },
    data(){
      return {
        songdetail: {},
        lyric: [],
        simisong: [],
        relatedplaylist: []
      }
    },
    created() {
      this.getSongDetail()
      this.getSimiSong()
    },
    computed:{

    },
    methods:{
      getSongDetail(){
        let id = this.$route.query.id
        getSongDetail(id).then(res => {
          // console.log(res)
          res.songs.forEach(value =>{
            this.songdetail = value
            value.ar.forEach(i => {
              this.songdetail.singer = new Detail(i)
            })
          })
          
          // console.log(this.songdetail)
          getLyric(id).then(res => {
            this.formatLyric(res.lrc.lyric)
            // console.log(this.songdetail)
            this.songdetail.lrc = this.lyric
          })
          
          this.getSearch(this.songdetail.name)
        })
        

      },
      
      formatLyric(text){
              let arr = text.split("\n"); //原歌词文本已经换好行了方便很多，我们直接通过换行符“\n”进行切割
              let row = arr.length; //获取歌词行数
              for (let i = 0; i < row; i++) {
                let temp_row = arr[i]; //现在每一行格式大概就是这样"[00:04.302][02:10.00]hello world";
                let temp_arr = temp_row.split("]");//我们可以通过“]”对时间和文本进行分离
                let text = temp_arr.pop(); //把歌词文本从数组中剔除出来，获取到歌词文本了！
                //再对剩下的歌词时间进行处理
                temp_arr.forEach(element => {
                  let obj = {};
                  let time_arr = element.substr(1, element.length - 1).split(":");//先把多余的“[”去掉，再分离出分、秒
                  let s = parseInt(time_arr[0]) * 60 + Math.ceil(time_arr[1]); //把时间转换成与currentTime相同的类型，方便待会实现滚动效果
                  obj.time = s;
                  obj.text = text;
                  this.lyric.push(obj); //每一行歌词对象存到组件的lyric歌词属性里
                });
              }
      },
      
      getSimiSong(){
        let id = this.$route.query.id
        getSimiSong(id).then(res => {
          this.simisong = res.songs
          // console.log(this.simisong)
        })
      },
      
      getSearch(keywords){
        getSearch(keywords).then(res => {
          this.relatedplaylist = res.result.playlists
          // console.log(this.relatedplaylist)
        })
      }
     
    }
  }
</script>

<style scoped>
  #song{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .song-list{
    display: flex;
    justify-content: center;
    width: 50%;
  }

</style>
