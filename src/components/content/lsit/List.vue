<template>
  <div id="list">
    <div><slot name="icon"></slot></div>
    <span>{{desc}}</span>
  </div>
</template>

<script>
export default {
  name: 'lsit',
  props: {
    desc: {
      typeof: String,
      default: '-----------'
    }
  }
}
</script>

<style scoped>
  #list {
    display: flex;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    border-bottom: 2px #F8F8F8 solid;
    align-items: center;
  }
  #list img {
    position: relative;
    top: 8px;
    left: 5px;
    height: 30px;
  }
  #list span {
    padding-left: 20px;
  }
</style>