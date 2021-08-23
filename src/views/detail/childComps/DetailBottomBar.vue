<template>
  <div class="bottom-bar">

    <div class="left">
      <div class="left-item">
        <img src="~assets/img/detail/客服.svg" >
        <p>客服</p>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/店铺.svg" >
        <p>店铺</p>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/收藏.svg" >
        <p>收藏</p>
      </div>
    </div>

    <div class="right">
      <div class="shopCar" @click="carClcik">
        <img src="~assets/img/detail/购物车.svg" >
      </div>
      <div class="pay">
        <img src="~assets/img/detail/代客下单.svg" >
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    carClcik() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>

  .bottom-bar {
    display: flex;
    font-size: 10px;
    box-shadow: 0px 0px 4px #888888;
  }
  .left {
    width: 55%;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
  }
  .left img {
    width: 20px;
  }
  .left-item {
    padding: 6px 8px 0px 8px;
  }
  .right {
    width: 45%;
    display: flex;
  }
  .right>div {
    flex: 1;
  }
  .right img{
    width: 35px;
    margin: 7px calc(50% - 17px);
  }
  .shopCar{
    background-color: rgba(255, 255, 0, 0.753);
  }
  .pay {
    background-color: #ff819865;
  }
</style>