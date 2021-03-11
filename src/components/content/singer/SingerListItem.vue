<template>
    <li class="sc">
      <a>
        <el-image
          class="img"
          :src="relatedplaylist.img"
          :fit="fit"></el-image>
      </a>
      <div class="sc-item">
        <a class="a">{{relatedplaylist.name}}</a>
        <p class="a">by: <a class="sc-item-a">{{relatedplaylist.nickname}}</a></p>
      </div>
    </li>
</template>

<script>
  export default{
    name: 'SingerListItem',
    props:{
      relatedplaylist:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .sc{
    display: flex;
  }
  .sc .img{
    width: 50px;
    margin-top: 8px;
  }
  .sc-item{
    width: 75%;
    text-indent: 1em;
    padding-top: 8px;
    line-height: 2;
    display: flex;
    flex-direction: column;
  }
  
  .sc-item-a{
   font-weight: bold;
  
    color: #000000;
  }
  .c{
    display: flex;
    margin-top: 8px;
  }
  .l{
    width: 77%;
    display: flex;
    flex-direction: column;
    padding-right: 3%;
  }
  .a{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family:Verdana;
  }
</style>
