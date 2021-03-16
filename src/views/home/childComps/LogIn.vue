<template>
  <div class="login">
    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <a href="#" class="btn">用户登录</a>
  </div>
</template>

<script>
  export default{
    name: 'Login',
  }
</script>

<style scoped>
  .login{
    background: url(../../../assets/img/test/index.png);
    background-size:cover;
    padding: 20px 20px 15px 20px;
    color: #6B6B6B;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .login p{
    line-height: 24px;
  }
  .btn{
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background: url(../../../assets/img/test/abtn.png) no-repeat;
    text-decoration: none !important;
    margin-top: 10px;
  }
  .btn:hover{
    background: url(../../../assets/img/test/btn.png) no-repeat;
  }
  @media only screen and (max-width: 960px) {
    .btn{
      margin-left: 10px;
      margin-top: 0;
    }
    .login{
      border-left: 1px #d5d5d5 solid;
    }
  }
</style>
