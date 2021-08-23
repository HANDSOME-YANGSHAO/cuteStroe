<template>
  <div class="goodslistitem" @click="itemClick">
      <img :src="showImage" alt="" @load='refresh'>
      <div class="goodsitemshow">
        <p>{{goodsitem.title}}</p>
        <span class="itemprice">￥{{goodsitem.price}}</span>
        <span class="cfav">⭐{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsitem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    // 这里做判断是因为首页的goodsItem里的数据结构 和 详情页推荐界面的数据结构有一点不一样，就是
    // 图片的存储位置，其他的都是一样的，兼容了两种数据结构，提高组件的复用性
    showImage() {
      return this.goodsitem.image || this.goodsitem.show.img
    },
    id() {
      return this.goodsitem.iid || this.goodsitem.shop_id
    }
  },
  methods: {
    refresh() {
      //方法一： 因为这个组件在两个页面都会用到，根据处于哪个路由然后就发送哪个全局事件
        // if (this.$route.path.indexOf('home')) {
        //   this.$bus.$emit('homeRefreshBSHeight')
        // } else if (this.$route.path.indexOf('detail'))
        // {
        //   this.$bus.$emit('detailRefreshBSHeight')
        // }

      //方法二: 该组件的方法只负责图片加载的事件，不考虑其他组件的关联程度
       this.$bus.$emit('refreshBSHeight')
    },  
    itemClick() {
      this.$router.push('/detail/' + this.id)
    }
  }
}

</script>

<style>
  .goodslistitem{
    width: 45%;
  }
  .goodslistitem img{

    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 0px 8px #888888;
  }
  .goodsitemshow{
    margin-top: 10px;
    font-size: 12px;
    width: 100%;
    height: 40px;
    white-space:  nowrap; /*规定段落中的文本不进行换行*/
    overflow: hidden;	/*溢出部分隐藏*/
    text-overflow: ellipsis; /*溢出文字以省略号代替显示*/
    text-align: center;
  }


  .itemprice{
    color: var(--color-high-text);
  }
  .cfav{
    padding-left: 5px;
  }
</style>