<template>
  <div class="pro_list">
    <div class="list_top">
      <list :desc="'我的消息'">
        <template #icon>
          <img src="~assets/img/profile/message.svg" alt="">
        </template>
      </list>
      <list :desc="'积分商城'">
        <template #icon>
          <img src="~assets/img/profile/pointer.svg" alt="">
        </template>
      </list>
      <list :desc="'会员卡'">
        <template #icon>
          <img src="~assets/img/profile/vip.svg" alt="">
        </template>
      </list>
    </div>

    <div class="list_bottom">
      <list :desc="'我的购物车'">
        <template #icon>
          <img src="~assets/img/profile/cart.svg" alt="">
        </template>
      </list>
      <list :desc="'下载购物App'">
        <template #icon>
          <img src="~assets/img/profile/shopping.svg" alt="">
        </template>
      </list>
    </div>
  </div>
</template>

<script>
import List from 'components/content/lsit/List.vue'
export default {
  name: 'ProfileList',
  components: {
    List
  }
}
</script>

<style>

</style>