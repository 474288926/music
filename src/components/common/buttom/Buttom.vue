<template>
  <el-affix position="bottom" :offset="20">
    <div id="player" class="player" v-show="playList.length > 0" >
      <div class="normal-player" v-show="fullScreen" >
        <div class="top" :class="disableCls">
          <i class="el-icon-d-arrow-left" @click="prev" ></i>
          <i @click="togglePlaying" :class="playIcon" ></i>
          <i class="el-icon-d-arrow-right" @click="next" ></i>
        </div>
        <div class="center">
          <img :src="currentSong.al.picUrl" alt="">
          <div class="center-box">
            <a style="margin-top: 5px;" >{{currentSong.name}}</a>
            <div style="margin-top: 5px;">
              <a v-for="(value, index) in currentSong.ar" :key="index" >{{value.name}}</a>
            </div>
            <div class="bottom">
              <el-slider v-model="currentTime" :max="duration" @change="change" :show-tooltip="false" @mousedown="isChange = true" @mouseup="isChange = false"></el-slider>
              <div style="margin-left: 5px;">{{format(currentTime)}}&emsp;/</div>
              <div style="margin-left: 10px;">{{format(duration)}}</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div @click='changeMode'>
            <i :class="iconMode" style="font-size: 1.2rem;"></i>
          </div>
        </div>
      </div>
    </div>
    <audio ref="audio" @canplay="ready" @error="error" @ended="end" autoplay="autoplay" @timeupdate="updataTime" :src="currentSong.audioUrl.url" ></audio>
  </el-affix>

</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import { playMode } from '../../../common/js/config.js'
  import { shuffle } from '../../../common/utils.js'
  
  export default{
    name: 'Buttom',
    data(){
      return {
          songReady: false,
          currentTime: 0,
          duration: 0,
          isChange: false
      }
    },
    emits: ['mousedown', 'mouseup'],
    computed:{
      ...mapGetters([
        'fullScreen',
        'playList',
        'currentSong',
        'playing',
        'currentIndex',
        'mode',
        'sequenceList'
      ]),
      playIcon() {
        return this.playing ? 'el-icon-video-pause' : 'el-icon-video-play'
      },
      disableCls() {
        return this.songReady ? '' : 'disable'
      },
      iconMode() {
        return this.mode === playMode.sequence ? 'el-icon-refresh-right' : this.mode === playMode.loop ? 'el-icon-refresh' : 'el-icon-sort'
      }
    },
    methods:{
      ...mapMutations({
        setPlayState: 'SET_PLAYING_STATE',
        setCurrentIndex: 'SET_CURRENT_INDEX',
        setPlayMode: 'SET_PLAY_MODE',
        setPlayList: 'SET_PLAY_LIST'
      }),
      togglePlaying(){
        if(!this.songReady) {
          return
        }
        this.setPlayState(!this.playing)
        // console.log(this.$store.state.playing)
      },
      prev(){
        if(!this.songReady) {
          return
        }
        let index = this.currentIndex - 1
        if(index === -1) {
          index = this.playList.length - 1
        }
        this.setCurrentIndex(index)
        if(!this.playing){
          this.togglePlaying()
        }
      },
      next(){
        if(!this.songReady) {
          return
        }
        let index = this.currentIndex + 1
         if(index === this.playList.length) {
           index = 0
         }
         this.setCurrentIndex(index)
         if(!this.playing){
           this.togglePlaying()
         }
      },
      ready() {
        this.duration = this.$refs.audio.duration;
        this.songReady = true
      },
      error() {
        this.songReady = true
      },
      updataTime() {
        if (this.isChange === false) {
          this.currentTime = this.$refs.audio.currentTime
        }
        
      },
      format(value) {
        value = value | 0
        const minute = value / 60 | 0
        const second = this._pad(value % 60) 
        return `${minute} : ${second}`
      },
      _pad(num, n = 2) {
        let len = num.toString().length
        while (len < n) {
          num = '0' + num
          len++
        }
        return num
      },
      change() {
        this.$refs.audio.currentTime = this.currentTime
        this.isChange = false
      },
      changeMode() {
        if(!this.songReady) {
          return
        }
        const mode = (this.mode + 1) % 3
        this.setPlayMode(mode)
        let list = []
        if (mode === playMode.random) {
          list = shuffle(this.sequenceList)
        } else {
          list = this.sequenceList
        }
        this.resetCurrentIndex(list)
        this.setPlayList(list)
        if(!this.playing){
          this.togglePlaying()
        }
      },
      resetCurrentIndex(list) {
        list.findIndex(item => {
          return item.id === this.currentSong.id
        })
      },
      end() {
        if (this.mode === playMode.loop) {
          this.loop()
        } else {
          this.next()
        }
      },
      loop() {
        this.$refs.audio.currentTime = 0
        this.$refs.audio.play()
      }
    },
    watch:{
      currentSong(newVal, oldVal) {
        if (newVal.id === oldVal.id) {
          return
        }
        this.$nextTick(() => {
          this.$refs.audio.play()
        })
      },
      playing(newVal) {
        this.$nextTick(() => {
          const audio = this.$refs.audio
          newVal ? audio.play() : audio.pause()
        })
      },
      isChange(Val, oldVal) {
      }
    }
  }
</script>

<style scoped>
  #player{
    display: flex;
    justify-content: center;
    
    
  }
  .player{
  }
  .normal-player{
    padding: 10px 15px;
    display: flex;
    width: 30%;
    border-radius: 10px 10px;
    background-color: rgba(56, 56, 56, 0.5);
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
  }
  .top i{
    font-size: 26px;
  }
  .center{
    display: flex;
    width: 70%;
  }
  .center img{
    width: 19%;
  }
  .disable{
    background-color: red;
  }
  .center-box{
    flex: 1;
    align-items: center;
    margin-left: 15px;
  }
  .bottom{
    display: flex;
    align-items: center;
  }
  .footer{
    width: 15%;
    display: flex;
    align-items: center;
    margin-top: 32px;
    margin-left: 20px;
  }

 >>>.el-slider{
    flex: 1;
    margin-top: 5px;
    margin-right: 10px;
  }
  >>>.el-slider__button{
    background-color: #ff0000;
    border: #ffffff 6px solid !important;
  }
</style>
