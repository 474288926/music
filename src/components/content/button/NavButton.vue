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
    height: 28%;
    display: flex;
  }
  .button{
    border: 1px #CCCCCC solid;
    padding: 2px 5px;
    background-image: linear-gradient(#f9f9f9, #ebebeb);
    margin-right: 5px;
    font-size: 14px;
    border-radius: 5px 5px;
    margin-left: 5px;
  }
  .button-one{
    width: 16%;
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
    width: 8%;
    border-radius: 0px 5px 5px 0px; 
    margin-left: -6px;
    margin-right: 5px;
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
</style>
