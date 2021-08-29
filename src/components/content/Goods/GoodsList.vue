<template>
  <div class="goodslist">
    <goods-list-item v-for="(item,index) in goods" :goodsitem='item' :key="index"/>
  </div>
</template>

<script>

import GoodsListItem from './GoodsLIstItem.vue'

export default {
  name: 'GoodsList',
  // 父组件调用该组件的时候，传啥数据过来它就该数据进行一个数据的展示
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
  .goodslist{
    z-index: 9;
    display: flex;
    /* 允许换行 */
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>