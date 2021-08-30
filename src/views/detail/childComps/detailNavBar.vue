<template>
  <div>
    <nav-bar id='detail_nav'>
      <div class="back" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">
        <div class="title-item" 
          v-for="(item,index) in titles" 
          :key="index"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)"
        >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"

export default {
  name: "detailNavBar",
  components: {
    NavBar
  }, 
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex : 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('themeClick', index)
    },
    back() {
    // 两者的效果是相同的，都采用了history模式
    // this.$router.back()
      this.$router.go(-1)
      }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1
  }
.active{
  color: rgba(0, 0, 0, 0.226);
}
.back img{
  width: 25px;
  margin-top: 11px;
}
</style>