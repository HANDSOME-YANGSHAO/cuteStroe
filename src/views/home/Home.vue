<template>
  <div id="home">
    <nav-bar class="homenavbar">
      <div slot="center">购物中心</div>
    </nav-bar>
    <tab-control 
        :titles="['流行','新款','精选']"
        ref="tabControl1"
        @tabClick="tabClick($event)"
        class="tabControl1"
        v-show="isTabShow"
      />
    <scroll 
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
      @scroll="scroll" >
      <home-swiper 
      @swiperLoad="getTabOffsetTop"
      :banners="banners"/>
      <recommend-views :recommends="recommends"/>
      <feature-views/>
      <tab-control 
        :titles="['流行','新款','精选']"
        ref="tabControl2"
        @tabClick="tabClick($event)"
      />
      <goods-list :goods ='showCurrentType' class="goodslist"/>
    </scroll>

    <back-top
      v-show="isBackTopShow"
      @click.native="backTopClick" />
  </div>
</template>

<script>
//这些是抽离的公共组件，common是所有项目可能多词使用的通用组件，content是和业务相关的组件，可能在本项目中多次使用的组件
import navBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/tabcontrol.vue'
import GoodsList from 'components/content/Goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'


//这些组件是本组件（本页面内）对应的相关子组件
import HomeSwiper from './childHome/HomeSwiper'
import RecommendViews from './childHome/RecommendViews.vue'
import FeatureViews from './childHome/FeatureViews.vue'

//相关的工具函数
import {getHomeMultidata,getHomeGoods} from 'network/home'

// 导入混入
import { imgLoadedMixIn, backTopMixin } from "common/mixin" 

export default {
  name: 'Home',
  mixins: [imgLoadedMixIn, backTopMixin],
  created() {
    //在home组件刚刚初始化的时候就去进行网络请求，把数据请求回来保存，可以增加用户体验，而不是
    //在每个小组件才初始化的时候去请求数据，那样容易体验不好，全是加载页面
    this.getHomeMultidata();

    //这个时候能够体会到封装的奇妙之处了，复用性极高！
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  mounted() {
    // 组件是没有相关的dom属性的，但是$el这个组件的属性是可以指向该组件的模板，这个时候就可以获取到dom属性了
    // but此时获取到的offsetTop是并不准确的，因为此时是在home组件挂载dom元素的时候获取offset，这个时候组件里面的
    // 图片可能还没有加载，所以应该等到TabControl这个组件前面的图片加载好再去获取那个offset，而且经过测试，这里除了
    // 轮播图以外的图片加载都是非常快的，所以一般轮播图图片加载完毕之后就可以获取offset了此时图片基本加载完毕
    // 所以这里=====>监听轮播图的图片加载完成再去获取offset
    // console.log(this.$refs.tabControl2.$el.offsetTop)
    this.$bus.$on('toTop', () => {
      this.$refs.scroll.scrollTo(0,-this.tabOffsetTop, 10)
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('refreshBSHeight', this.loadListener)
  },
  components: {
    navBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendViews,
    FeatureViews,
    GoodsList,
    Scroll
  },
  data(){
    return {
      currentType: 'pop',
      banners: [],
      recommends: [],
      goods: {
        sell: {page:0,list:[]},
        pop: {page:0,list:[]},
        new: {page:0,list:[]}
      },// 该数据结构是用来存储相关商品数据的，并且让home组件才初始化的时候，就去请求第一页的的数据
      tabOffsetTop: 0,// 用来记住TabControl组件的偏移位置，为了完成吸顶的效果
      isTabShow: false,
      saveY: 0
    }
  },
  methods: {

    // 事件监听相关的函数
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    scroll (position){
      this.listenBackTopShow(position)
      this.isTabShow = (-position.y) >= this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    getTabOffsetTop() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

 // 网络请求模块
    //这里的函数是该组件的函数，函数内调用的是网络请求模块那里home页面相关的网络请求模块导入过来的同名函数
    getHomeMultidata(){
        getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type){
        //这里封装的太巧妙了！！每次调用，都让页面自动加一，在这里可以联想到懒加载触发的时候，每次上拉加载更多，再调一次相关的
        //函数就可以了，牛牛牛！每次自动加一
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;    
        })

        // 每次请求过后就允许再次上拉加载更多
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
    }

  },
  computed: {
    showCurrentType(){
      return this.goods[this.currentType].list;
    }
  }
}

</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.homenavbar{
  /* 
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 9; 
  */
}
.goodslist{
  margin-top: 20px;
}
.content{
  /* height: calc(100% - 93px); */
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  z-index: 9;
}
.tabControl1{
  position: relative;
  z-index: 10;
}
</style>