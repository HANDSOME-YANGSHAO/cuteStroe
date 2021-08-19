<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backTop'
}
</script>

<style>
  .backTop{
    z-index: 9;
    position: fixed;
    right: 5px;
    bottom: 50px;
  }
  .backTop img{
    width: 43px;
  }
</style>