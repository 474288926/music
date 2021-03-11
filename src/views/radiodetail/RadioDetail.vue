<template>
  <div id="radio-detail">
    <div class="radio-detail"  v-if="flag > 1">
      <radio-detail-fl :list="list"/>
      <radio-detail-fr :list="djradios" />
    </div>
  </div>
</template>

<script>
  import RadioDetailFl from './childComps/RadioDetailFl.vue'
  import RadioDetailFr from './childComps/RadioDetailFr.vue'
  
  import { getDjDetail, getDjProgram, getDjRadioHot, DjRadios } from '../../network/radiodetail.js'
  export default{
    name: 'RadioDetail',
    components:{
      RadioDetailFl,
      RadioDetailFr
    },
    data(){
      return {
        list: {},
        lyric: [],
        djradios: [],
        flag: 0
      }
    },
    created() {
      this.getDjDetail()
    },
    methods:{
      getDjDetail(){
        let id = this.$route.query.id
        getDjDetail(id).then(res => {
          this.list = res.data
          this.formatLyric(this.list.desc)
          this.list.desc = this.lyric
          this.getDjRadioHot(res.data.categoryId)
          // console.log(res)
        })
        this.getDjProgram(id)
      },
      getDjProgram(value){
        let song = []
        getDjProgram(value).then(res => {
          song = res.programs
          this.list.songs = song
        })
      },
      getDjRadioHot(value){
        getDjRadioHot(value).then(res => {
          let djradios = []
          res.djRadios.splice(0, 11).forEach(value => {
            djradios.push(new DjRadios(value))
            this.flag++
          })
          this.djradios = djradios
          // console.log(this.djradios)
        })
      },
      formatLyric(text){
              let arr = text.split('\n');
              arr.forEach(value => {
                this.lyric.push(value)
              })
      }
    }
  }
</script>

<style scoped>
  #radio-detail{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .radio-detail{
    width: 50%;
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    border-bottom: #d5d5d5 1px solid;
  }
</style>
