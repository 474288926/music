<template>
  <div class="fr-footer">
    <button type='button' class="button-one el-icon-video-play">&nbsp;播放</button>
    <button type='button' class="button-two el-icon-plus"></button>
    <button type='button' class="button el-icon-folder-add">&nbsp;收藏</button>
    <button type='button' class="button el-icon-share">&nbsp;分享</button>
    <button type='button' class="button el-icon-download">&nbsp;下载</button>
    <button type='button' class="button el-icon-chat-line-square">&nbsp;评论</button>
  </div>
</template>

<script>
  export default{
    name: 'NavButton'
  }
</script>

<style>
  .fr-footer{
    margin-top: 20px;
    height: 35px;
    display: flex;  
    /* justify-content: space-between; */
  }
  .button{
    border: 1px #CCCCCC solid;
    padding: 2px 5px;
    background-image: linear-gradient(#f9f9f9, #ebebeb);
    font-size: 14px;
    margin-right: 5px;
    border-radius: 5px 5px;
  }
  .button-one{
    border-radius: 5px 0px 0px 5px;
    border: none;
    padding: 3px 5px;
    line-height: 100%;
    background-image: linear-gradient(#4598e1, #175b9a);
    border-right: none;
    font-size: 14px;
    color: white;
  }
  .button-two{
    width: 6%;
    margin-right: 10px;
    border-radius: 0px 5px 5px 0px; 
    border: none;
    background-image: linear-gradient(#4598e1, #175b9a);
    border-left: #fafafa 1px solid;
  }
  .button-one:hover{
    background-image: linear-gradient(#5ea3e3, #3382ce);
  }
  .button-two:hover{
    background-image: linear-gradient(#5ea3e3, #3382ce);
  }
  .button:hover{
    background-image: linear-gradient(#ffffff, #f9f9f9);
  }
  @media only screen and (max-width: 960px) {
    .fr-footer{
      flex-wrap: wrap;
      height: 80px;
    }
    .button{
      margin-top: 5px;
    }
    .button-one{
      margin-top: 5px;
    }
    .button-two{
      margin-top: 5px;
    }
  }
</style>
