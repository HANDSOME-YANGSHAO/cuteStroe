<template>
  <div class="car-list">
    <scroll class="wrapper" ref="scroll">
      <car-list-item 
        v-for="(item,index) in cartList" 
        :key="index" 
          :product="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CarListItem from './CarListItem.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'CarList',
  components: {
    Scroll,
    CarListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .car-list {
    height: calc(100vh - 133px);
  }
  .wrapper {
    height: 100%;
    overflow: hidden;
  }
</style>