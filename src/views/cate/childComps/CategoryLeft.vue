<template>
  <div id="category_left">
    <div
      class="left_tab_item"
      v-for="(item, index) in list"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: currIndex == index }"
    >
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
import { getCategory, getCategoryInfo } from "network/category.js";
export default {
  data() {
    return {
      currIndex: 0,
      currMaitKey: 0,
      currMiniWallkey: 0,
      list: null
    };
  },
  props: {
    // list: Array
  },
  mounted() {
    //获取左边栏的信息
    this.getCategory();
  },
  methods: {
    async getCategory() {
      let res = await getCategory();
      if (res) {
        this.list = res.data.category.list;
        //刚进分类页面，相当于是点击了itemClick(0)
        this.itemClick(0);
      }
    },
    itemClick(index) {
      // 在这里发出事件总线的目的是让兄弟组件right每次切换分类内容展示的时候都可以回到最上面，然后right接收这个事件每次点击的时候都返回顶部
      this.$bus.$emit('scrollToTop')
      this.currIndex = index;
      if (this.list) {
        this.currMaitKey = this.list[index].maitKey;
        this.currMiniWallkey = this.list[index].miniWallkey;
        this.$parent.getCategoryInfo(this.currMaitKey);
        this.$parent.getCategoryDetail(this.currMiniWallkey)
      }
    }
  }
};
</script>
<style scoped>
#category_left {
  font-size: 15px;
  width: 25%;
  background-color: #f6f6f6;
}
.left_tab_item {
  height: 38px;
  line-height: 38px;
}
.left_tab_item p {
  width: 100%;
  text-align: center;
  color: rgb(100, 100, 100);

  display: inline-block;
  line-height: 10px; /* line-height是用来控制border的,其父亲的line-height用来控制整体的行高，自己的用来控制元素的行高 */
  border-left: 4px solid #f6f6f6;
}
.left_tab_item.active {
  background-color: white;
}
.left_tab_item.active p {
  color: var(--color-high-text);
  font-weight: 600;
  border-left: 0.2rem solid var(--color-high-text);
}
</style>
