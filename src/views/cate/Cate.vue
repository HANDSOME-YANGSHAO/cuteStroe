<template>
    <div id="category">
    <nav-bar class="category_nav"><template #center>分类</template></nav-bar>
    <div class="main">
      <category-left ref="left"></category-left>
      <category-right ref="right" :list_item="rightList" :miniWallList="rightMiniWallList"></category-right>
    </div>
  </div>
</template>

<script>


import CategoryLeft from "./childComps/CategoryLeft.vue";
import CategoryRight from "./childComps/CategoryRight.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import { getCategory, getCategoryInfo, getCategoryDetail} from 'network/category.js'

export default {
  name: 'Cate',
  data() {
    return {
      rightList: null,
      rightMiniWallList: null
    };
  },
  created() {},
  mounted() {
  },
  components: {
    NavBar,
    CategoryLeft,
    CategoryRight
  },
  methods: {
    async getCategoryInfo(maitKey) {
      let res = await getCategoryInfo(maitKey);
      if (res) {
        this.rightList = res.data.list;
      }
    },
    async getCategoryDetail(miniWallkey) {
      let res = await getCategoryDetail(miniWallkey);
      if (res) {
        this.rightMiniWallList = res;
      }
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  font-size: 0.6rem;
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>