<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @themeClick="titileClick" ref="detailNav"/>
    <scroll class="content" ref="scroll" @scroll="scroll" :probe-type="3">
      <detail-swiper :topImg="topImages"/>
      <detail-base-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-goods-info :detail-info="detaiGoodsInfo" @loadImgEvent="imgLoad"/>
      <detail-params :paramInfo="goodsParams" ref="params"/>
      <detail-comment-info :comment="commentInfo" class="comment" ref="comments"/>
      <goods-list :goods="recommend" class="recommendInfo" ref="recommends"/>
    </scroll>
    <detail-bottom-bar class="bar-bottom" @addCart="addToCart"/>
    <back-top
      v-show="isBackTopShow"
      @click.native="backTopClick"
    />
    <!-- <toast :message="toastMessage" :isShow="isShow" /> -->
  </div>
</template>

<script>
import DetailSwiper from "./childComps/DetailSwiper.vue"
import detailNavBar from "./childComps/detailNavBar.vue"
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue"
import DetailShopInfo from "./childComps/DetailShopInfo.vue"
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParams from "./childComps/DetailParams.vue"
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from "./childComps/DetailBottomBar.vue"


import Scroll from "components/common/scroll/Scroll.vue"
import GoodsList from "components/content/Goods/GoodsList.vue"
// import Toast from "components/common/toast/Toast.vue"

import {getDetail, getRecommend, Goods,Shop, GoodsParams} from "network/detail"

import { debounce } from "common/utiles"
import { imgLoadedMixIn, backTopMixin} from "common/mixin"
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  components: {
    detailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    // Toast
  },
  mixins: [imgLoadedMixIn,backTopMixin],
  data(){
    return{
      iid : null,
      topImages: null,
      goodsInfo: {},
      shopInfo: {},
      detaiGoodsInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: 0
      // toastMessage: '',
      // isShow: false,
      // toastTimer: null
    }
  },
  created() {
    this.$bus.$emit('main-tab-bar-hide')

    // 1.让详情组件初始化的时候保存路由传入进来的参数
    this.iid = this.$route.params.iid

    // 2.根据传入的参数去请求详情页面的主要数据
    getDetail(this.iid).then( (res) => {

      const data = res.result
      // console.log(data)

      // 抽离出轮播图组件的数据
      this.topImages = data.itemInfo.topImages

      // 抽离商品基本信息组件的数据
      this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 抽离店铺信息供给商铺组件
      this.shopInfo = new Shop(data.shopInfo)

      // 抽离出商品的详细信息数据
      this.detaiGoodsInfo = data.detailInfo

      // 抽离出商品的参数信息
      this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)

      // 抽离出评论的数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    })
  
    // 3.请求推荐物品的数据
    getRecommend().then((res) => {
      this.recommend = res.data.list
    })

    // 4.获取各主题的offset的防抖函数
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs)
    }, 50)
  
  },
  methods: {
    ...mapActions(['addTocar']),
    imgLoad() {
      this.newRefresh()
      this.getThemeTopYs()
    },
    titileClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    scroll(position) {
      const positionY = -position.y
      // 这里要根据之前获取到的offset那个数组，加个最大值，当作一个区间处理，可以用for循环去遍历这个区间，然后用
      // 当前滚动条的偏移去做一个判断是否属于该区间，如果属于该区间就执行该事件====》让导航的currentIndex变为现在的值
      for(let i = 0 ; i<this.themeTopYs.length-1 ;i++ ) {
        if ( this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
      // 判断backTop组件是否显示
      this.listenBackTopShow(position)
    },
    addToCart() {
      const product = {}
      product.img = this.topImages[0]
      product.title = this.goodsInfo.title
      product.desc = this.goodsInfo.desc
      product.price = this.goodsInfo.realPrice
      product.iid = this.iid
      
      // 这里本来是用commit直接调mutation的，但是这样mutation里面逻辑复杂了，并且不同的分支是干的不同的事情，可能让次数加1
      // 也可能是让购物车列表再加1，都有可能，到时候不好做判断，规范点的话mutation一个方法只能做一件事情，所以让复杂的判断逻辑去
      // 去actions里面做了
    //   this.$store.dispatch('addTocar', product).then(res => {// 这里是用提交分发去触发vuex里的actions去改变state的，但其实可以把vuex的方法
    //   // 映射出来到该组件方法里面直接调用
    //     console.log(res)
    //   })

    // 注意，这里的addTocar方法其实是把vuex里面的actions里面的其中一个方法给映射过来了
      this.addTocar(product).then(res => {
        // 这些是原生的toast解决办法，每当一个页面需要用到就要引入该组件，然后注册组件，设置该组件变量传给toast组件，再设置相关的函数
        // 控制toast组件的显示和隐藏，但是因为toast是一个很常见的组件，这样每个用到的组件都需要这么麻烦的步骤，所以我们选择插件办法调用
        // toast组件，这样的话整个项目只需要一个toast就可以实现弹窗提醒
        // this.toastMessage = res
        // this.isShow = true
        // clearTimeout(this.toastTimer)
        // this.toastTimer = setTimeout(() => {
        //   this.isShow = false
        // }, 1500)

        // 这里就直接用注册好的全局组件对象得方法让其显示就行了，在一开始这个组件就被全局注册，并且挂载到了document中了，此时
        // 得$toast对象就是指向刚刚被挂载的组件
        this.$toast.show(res, 2000)
      })
    }
  },
  destroyed() {
    // 在混入的通过事件总线监听GoodsListIetm组件的图片加载事件，然后当组件销毁或者未激活状态的情况就会取消该组件对
    // 事件总线的该图片加载事件的监听 ======>>哪个页面激活了就让哪个页面去监听事件总线上的事件，如果不激活或者销毁
    // 就让该页面不监听，因为GoodsListIetm组件在其他页面也可能复用，也可能发出全局事件，此时没有激活的页面就不需要
    // 再去监听这个全局性的事件了
    this.$bus.$off('refreshBSHeight',this.loadListener)
    this.$bus.$emit('main-tab-bar-show')
  }
}
</script>

<style scoped>
  #detail{
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 93px);
    background-color: #fff;
    position: relative;
    overflow: hidden;
  }
  .detail-nav{
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
  .recommendInfo {
    padding-top: 20px  
  }
  .bar-bottom {
    position: relative;
    z-index: 10;
  }
</style>