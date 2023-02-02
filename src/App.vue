<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-show="isShow"/>
  </div>
</template>
<script>
import mainTabBar from 'components/content/mainTabBar/maintabbar'

export default {
  name: 'app',
  components:{
    mainTabBar
  },
  data() {
    return {
      isShow: true
    }
  },
  created() {
    // 详情页的组件一旦加载出来，就让导航消失，一旦detail销毁就又让其显示
    this.$bus.$on('main-tab-bar-hide',() => {
      // console.log('关闭')
      this.isShow = false
    })
    this.$bus.$on('main-tab-bar-show',() => {
      // console.log('打开')
      this.isShow = true
    })
  }
}

</script>

<style>
@import "assets/css/base.css";

</style>
