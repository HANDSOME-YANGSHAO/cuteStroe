<template>
  <swiper class="detail-class">
    <swiper-item v-for="item in topImg" :key="item">
      <img v-lazy="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper"

export default {
  name: "DetailSwiper",
  components: {
     Swiper,
     SwiperItem
  },
  props: {
    topImg: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-class{
  height: 300px;
  overflow: hidden;
}
</style>