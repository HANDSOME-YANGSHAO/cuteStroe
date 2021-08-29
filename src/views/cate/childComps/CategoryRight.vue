<template>
  <div id="category_right">
    <scroll
      @scroll="listenBackTopShow"
      :probeType="3"
      class="wrapper" 
      ref="scroll">
      <div class="tab_item" v-for="(item, index) in list_item" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" />
          <p class="item_text">{{ item.title }}</p>
        </a>
      </div>
      <goods-list :goods="miniWallList" class="miniwall"/>
    </scroll>
    <back-top
      v-show="isBackTopShow"
      @click.native="backTopClick" />
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/Goods/GoodsList.vue"
// 导入混入
import { imgLoadedMixIn, backTopMixin } from "common/mixin" 


export default {
  mixins: [imgLoadedMixIn, backTopMixin],
  props: {
    list_item: {
      type: Array,
      default() {
        return [];
      }
    },
    miniWallList: {
      typeof: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    this.$bus.$on('scrollToTop', () => {
      this.$refs.scroll.scrollTo(0, 0, 100)
    })
  },
  deactivated() {
    this.$bus.$off('refreshBSHeight', this.loadListener)
  },
  methods: {
    imgLoad() {
      this.count++;
      if (this.count >= this.list_item.length) {
        this.$refs.scroll.refresh();
        this.count = 0;
      }
    }
  },
  components: {
    Scroll,
    GoodsList
  }
};
</script>
<style scoped>
#category_right {
  width: 75%;
  height: 100%;
}
.wrapper {
  height: 100%;
  overflow: hidden;
}
.tab_item {
  display: inline-block;
  width: 75px;
  margin: 10px 5px;
}
.tab_item a {
  display: block;
}
.tab_item img {
  width: 100%;
}
.item_text {
  margin-top: 0.3rem;
  text-align: center;
}

</style>
