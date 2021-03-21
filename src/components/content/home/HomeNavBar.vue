<template>
  <div class="home-nav-bar" ref="homenav">
    <div class="box">
      <div class="left">
        <h1 class="logo"><a href="">网易云音乐</a></h1>
      </div>
       
       <div class="conter">
         <div class="btn" @click="activeBtn"><i class="el-icon-s-grid"></i></div>
       </div>
       
       <transition name="slide-fade">
         <div class="right" v-show='isbtn'>
           <ul >
             <li :class="{active: activeIndex == index}" @click="isActive(index)" v-for="(menu, index) in menulist" :key="index">{{menu}}</li>
           </ul>
           <div class="serch-box">
            <el-autocomplete
                  prefix-icon="el-icon-search"
                  class="inline-input"
                  v-model="state"
                  size="small"
                  :fetch-suggestions="querySearch"
                  placeholder="音乐/视频/电台/用户"
                  :trigger-on-focus="false"
                  @select="handleSelect"
                ></el-autocomplete>
            <el-button size="small" round>创造者中心</el-button>   
            <el-link type="info" :underline="false">登录</el-link> 
           </div>         
         </div>
       </transition>
    </div>         
  </div>
      
</template>

<script>
  export default {
    name: 'HomeNavBar',
    props: {
      menulist: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        activeIndex: '0',
        isbtn: true,
        state: '',
        screenWidth: document.documentElement.clientWidth
      }
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      isActive(index) {
        this.activeIndex = index
      },
      activeBtn() {
        this.isbtn = !this.isbtn
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      const that = this
      window.onresize= () => {
          return (() => {
              window.screenWidth = document.body.clientWidth;
              that.screenWidth = window.screenWidth;
          })();
      }
    },
    watch:{
      screenWidth(newVal, oldVal) {
        if(newVal < 960) {
          this.isbtn = false
        }else {
          this.isbtn = true
        }
        // console.log(newVal, oldVal)
      }
    }
  }
</script>

<style  scoped>
.home-nav-bar{
    box-sizing: border-box;
    background: #2b2b2b;
    border-bottom: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 55%;
    overflow: hidden;
  }
 .logo{
    background-position: 0 0;
    background: url(../../../assets/img/frame/topbar.png) no-repeat;
  }
  .logo a{
    display: block;
    width: 170px;
    height: 69px;
    text-indent: -9999px;
  }
.right{
  display: flex;
}
.right ul{
  display: flex;
  margin-right: 100px;
}
.right ul li{
  line-height: 70px;
  height: 70px;
  white-space: nowrap;
  padding: 0 10px;
  color: #b5b5b5;
  font-size: .8rem;
}
.right ul li:hover{
  color: white;
  box-sizing: border-box;
  background-color: #000000;
  border-bottom: 2px white solid;
}
.active{
  color: white;
  box-sizing: border-box;
  background-color: #000000;
  border-bottom: 2px white solid;
}
  >>>.el-autocomplete{
    line-height: 70px;
  }
  >>>.el-autocomplete input{
    border-radius: 20px ;
    width: 90%;
  }
  .el-button{
    background-color: #2b2b2b;
    color: #cccccc;
    border: #6b6b6b 1px solid;
    font-size: 10px;
  }
  .el-button:hover{
    background-color: #2b2b2b;
    color: #FFFFFF;  
    border: #FFFFFF 1px solid;
  }
  .el-link{
    margin-left: 20px;
    font-size: 8px;
  }
  .btn{
    display: none;
  }
@media only screen and (max-width: 960px) {
  .box{
    display: flex;
    flex-wrap: wrap;
  }
  .box .left {
    margin-right: auto;
  }
  .conter{
    display: flex;
  }
  .right{
    width: 100%;
    flex-flow: column;
    overflow: hidden;
  }
  .right ul{
    padding: 0 auto;
    display: block;
    width: 100%;
    margin-right: auto;
  }
  .right ul li{
    line-height: 40px;
    height: 40px;
  }
  .serch-box{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .btn{
    font-size: 1.5rem;
    margin-left: 10px;
    display: block;
    color: white;
    padding: 1px 3px;
    border: 1px solid #c7c7c7;
  }
  .slide-fade-enter-active{
    animation: slide-fade-in 1s;
  }
  .slide-fade-leave-active{
    animation: slide-fade-in 1s reverse;
  }
  @keyframes slide-fade-in {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: 310px;
      opacity: 1;
    }
  }
}
  
</style>
