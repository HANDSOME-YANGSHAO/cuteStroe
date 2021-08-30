<template>
  <div class="pro_base_info">

    <div class="_login">
      <div class="_login-left">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="_login-center">
        <div class="_center-dsc">登陆 / 注册</div>
        <div class="_center-phone">
          <img src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="_login-right">
        <img src="~assets/img/common/right.svg" alt="">
      </div>
    </div>

    <div class="money">
      <div class="item l">
        <div><span>0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div class="item c">
        <div><span>0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="item r">
        <div><span>0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBaseInfo'
}
</script>

<style scoped>
  .pro_base_info {
    border-bottom: 10px #F8F8F8 solid;
  }
  ._login {
    height: 90px;
    display: flex;
    background-color: #FF5677;
    color: white;
  }
  ._login-left {
    width: 25%;
  }
  ._login-left img{
    width: 70px;
    margin: 10px 11px;
  }
  ._login-center{
    width: 50%;
   }
   ._center-phone {
     font-size: 15px;
     padding: 2px 10px 5px 7px;
   }
   ._center-phone img{
     vertical-align: text-bottom;
     height: 20px;
     padding-right: 5px;
   }
   ._center-dsc {
     
     padding: 20px 10px 5px 10px;
   }
  ._login-right {
    position: relative;
    width: 25%;
  }
  ._login-right img {
    width: 30px;
    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .money {
    display: flex;
    text-align: center;
  }
  .item {
    height: 90px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .item span {
    font-size: 22px;
    font-weight: bold;
    color: #F6693B;
  }
  .l,.r {
    border-bottom: 2px #F8F8F8 solid;
  }
  .c {
    border-bottom: 2px #F8F8F8 solid;
    border-left: 2px #F8F8F8 solid;
    border-right: 2px #F8F8F8 solid;
  }
</style>