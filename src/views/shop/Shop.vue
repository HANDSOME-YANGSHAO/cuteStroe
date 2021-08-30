<template>
  <div id="shopCar">
    <!-- 1.导航 -->
    <nav-bar class="shop-nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 2.购物车列表 -->
    <car-list/>

    <!-- 3.底部的工具栏 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CarList from './childComponents/CarList'
import CartBottomBar from './childComponents/CartBottomBar.vue'
// 这个东西的作用是把vuex里面的getters给拿过来并可以映射为本组件的计算属性，
// 因为公共状态管理里面的计算属性可能会被多个组件使用，方便了各个组件不用再专门写重复的计算属性了
// 只有vuex里的getters写一遍就可
import { mapGetters } from 'vuex'



export default {
  name: 'shop',
  components: {
    NavBar,
    CarList,
    CartBottomBar
  },
  computed: {
    // 1.数组语法，把vuex里的getters按照原名直接转换成这个组件的计算属性
    // ...mapGetters(['cartLength'], ['cartList'])
    // 2.对象语法，可以把vuex里面的公共计算属性进行自定义命名映射到本组件里面
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
</style>