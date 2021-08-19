<template>
  <div class="recommendviews">
    <div class="recommendviews-item" v-for = "item in recommends" :key = "item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendviews',
  props:{
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommendviews{
    display: flex;
    padding:10px 0px 20px 0px;
    text-align: center;
    font-size: 12px;
    border-bottom: 8px solid #eee;
  }
  .recommendviews-item{
    flex: 1;
    margin: 0px 10px;
  }
  .recommendviews-item img {
    width: 100%;
    margin-bottom: 10px;
  }
</style>