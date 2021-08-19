<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return{
        isLoad: false
      }
    },
    methods: {
      // 这里加载完第一张图片高度就撑起来了，就可以获取offsetTop了，后面的图片就不需要再发送事件了
      swiperImgLoad() {
        if(!this.isLoad){
          this.$emit('swiperLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
