<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="var(--color-tint)">
        <div slot="tab-bar-icon"><img src="~assets/img/tabbar/home.svg" alt=""></div>
        <div slot="tab-bar-icon-active"><img src="~assets/img/tabbar/home_active.svg" alt=""></div>
        <div slot="tab-bar-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/cate" activeColor="var(--color-tint)">
        <div slot="tab-bar-icon"><img src="~assets/img/tabbar/category.svg" alt=""></div>
        <div slot="tab-bar-icon-active"><img src="~assets/img/tabbar/category_active.svg" alt=""></div>
        <div slot="tab-bar-text">目录</div>
      </tab-bar-item>
       <tab-bar-item path="/shop" activeColor="var(--color-tint)">
        <div slot="tab-bar-icon"><img src="~assets/img/tabbar/shopcart.svg" alt=""></div>
        <div slot="tab-bar-icon-active"><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></div>
        <div slot="tab-bar-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/profile" activeColor="var(--color-tint)">
        <div slot="tab-bar-icon"><img src="~assets/img/tabbar/profile.png" alt=""></div>
        <div slot="tab-bar-icon-active"><img src="~assets/img/tabbar/profile_active.png" alt=""></div>
        <div slot="tab-bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
// 路由懒加载
const tabBar = () => import ("../../common/tabbar/TabBar.vue")
const tabBarItem = () => import ("../../common/tabbar/TabBarItem.vue")

export default {
  name:"mainTabBar",
  components:{
    tabBar, 
    tabBarItem
  }
}
</script>

<style>

</style>