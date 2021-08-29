import { debounce } from "./utiles";
import BackTop from 'components/content/backTop/BackTop.vue'
import { BACKTOP_VALUE } from "./const";

export const imgLoadedMixIn = {
  data() {
    return {
      newRefresh: null,
      loadListener: null
    }
  },
  mounted() {
    this.newRefresh = debounce(() => {
      this.$refs.scroll && this.$refs.scroll.refresh()
    }, 150)

    this.loadListener = () => {
      this.newRefresh()
    }
    // 监听事件总线bus发出来的事件
    this.$bus.$on('refreshBSHeight', this.loadListener)
  }}

export const backTopMixin = {
  data() {
    return {
      isBackTopShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick(){
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenBackTopShow(position) {
      this.isBackTopShow = (-position.y) > BACKTOP_VALUE
    }
  }
}