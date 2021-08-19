<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImg="topImages"/>
      <detail-base-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-goods-info :detail-info="detaiGoodsInfo" @loadImgEvent="imgLoad"/>
    </scroll>
  </div>
</template>

<script>
import DetailSwiper from "./childComps/DetailSwiper.vue"
import detailNavBar from "./childComps/detailNavBar.vue"
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue"
import DetailShopInfo from "./childComps/DetailShopInfo.vue"
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'

import Scroll from "components/common/scroll/Scroll.vue"
import {getDetail,Goods,Shop} from "network/detail"


export default {
  name: 'Detail',
  components: {
    detailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  },
  data(){
    return{
      iid : null,
      topImages: null,
      goodsInfo: {},
      shopInfo: {},
      detaiGoodsInfo: {}
    }
  },
  created() {
    // 1.让详情组件初始化的时候保存路由传入进来的参数
    this.iid = this.$route.params.iid

    // 2.根据传入的参数去请求数据
    getDetail(this.iid).then( (res) => {

      const data = res.result
      console.log(data)

      // 抽离出轮播图组件的数据
      this.topImages = data.itemInfo.topImages

      // 抽离商品基本信息组件的数据
      this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 抽离店铺信息供给商铺组件
      this.shopInfo = new Shop(data.shopInfo)

      // 抽离出商品的详细信息数据
      this.detaiGoodsInfo = data.detailInfo
    })
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 44px);
    background-color: #fff;
  }
  .detail-nav{
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
</style>