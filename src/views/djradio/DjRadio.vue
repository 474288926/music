<template>
  <div id="djradio">
    <div class="djradio">
      <dj-banner :categories="categories" />
      <program :list="list" />
      <category-recommend :type="type" />
    </div>
  </div>
</template>

<script>
  import Program from './childComps/Program.vue'
  import CategoryRecommend from './childComps/CategoryRecommend.vue'
  
  import DjBanner from '../../components/content/djbanner/DjBanner.vue'
  
  import { getDjCateList, getProgramRecommend, getDjProgramTopListHours, getDjRecommendType } from '../../network/djradio.js'
  
  export default{
    name: 'DjRadio',
    components:{
      DjBanner,
      Program,
      CategoryRecommend
    },
    data(){
      return {
        categories: [],
        list: [],
        type: []
      }
    },
    created() {
      this.getDjCateList()
      this.getProgramRecommend()
      this.getDjProgramTopListHours()
      this.getDjRecommendType()
    },
    methods:{
      getDjCateList(){
        getDjCateList().then(res => {
          this.categories = res.categories
          // console.log(this.categories)
        })
      },
      getProgramRecommend(){
        getProgramRecommend().then(res => {
          this.list.push(res.programs)
          // console.log(this.list)
        })
      },
      getDjProgramTopListHours(){
        getDjProgramTopListHours().then(res => {
          let djprogramtoplisthours = []
          res.data.list.forEach(value => {
            djprogramtoplisthours.push(value.program)
          })
          this.list.push(djprogramtoplisthours)
          // console.log(this.djprogramtoplisthours)
        })
      },
      getDjRecommendType(){
        let type = [2, 6, 5, 3, 2001, 11]
        type.forEach(value => {
          getDjRecommendType(value).then(res => {
            this.type.push(res.djRadios.splice(0, 4)) 
            // console.log(this.type)
          })
        })
        console.log(this.type)
      }
    }
  }
</script>

<style scoped>
  #djradio{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .djradio{
    width: 50%;
    padding-top: 20px;
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    border-bottom: #d5d5d5 1px solid;
  }
</style>
