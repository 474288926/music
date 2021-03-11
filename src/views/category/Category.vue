<template>
  <div id="category">
    <div class="category">
      <dj-banner :categories="categories" @getCateId="getCateId"/>
      <new-radio :djrecommendtype="djrecommendtype" />
      <radio-rank :djradiohot="playlistslice(djradiohot, limit, offset)" ></radio-rank>
      <div class="page">
        <el-pagination
          @current-change="currentchange"
          layout="prev, pager, next"
          :total="total/2">
        </el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
  import NewRadio from './childComps/NewRadio.vue'
  import RadioRank from './childComps/RadioRank.vue'
  
  import DjBanner from '../../components/content/djbanner/DjBanner.vue'
  
  import { getDjCateList, getDjRecommendType, getDjRadioHot } from '../../network/category.js'
  
  export default{
    name: 'Category',
    components:{
      DjBanner,
      NewRadio,
      RadioRank
    },
    data(){
      return {
        categories: [],
        djrecommendtype: [],
        djradiohot: [],
        total: null,
        limit: 0,
        offset: 20
      }
    },
    created() {
      let id = this.$route.query.id
      this.getDjCateList()
      this.getDjRecommendType(id)
      this.getDjRadioHot(id)
    },
    methods:{
      getDjCateList(){
        getDjCateList().then(res => {
          this.categories = res.categories
          // console.log(this.categories)
        })
      },
      getDjRecommendType(value){
        getDjRecommendType(value).then(res => {
          this.djrecommendtype = res.djRadios.splice(0, 5)
          // console.log(this.djrecommendtype)
        })
      },
      getDjRadioHot(value){
        getDjRadioHot(value).then(res => {
          this.djradiohot = res.djRadios
          this.total = res.djRadios.length
          console.log(this.djradiohot)
        })
      },
      getCateId(value){
        this.getDjRecommendType(value)
        this.getDjRadioHot(value)       
      },
      playlistslice(value, limit, offset){
         return value.slice(limit, offset)
      },
      currentchange(val){
        this.limit = (val - 1)*20
        this.offset = val*20
        // console.log(val)
      },
    }
  }
</script>

<style scoped>
  #category{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .category{
    width: 50%;
    padding-top: 20px;
    border-left: #d5d5d5 1px solid;
    border-right: #d5d5d5 1px solid;
    border-bottom: #d5d5d5 1px solid;
  }
  .page{
    display: flex;
    justify-content: center;
  }
</style>
