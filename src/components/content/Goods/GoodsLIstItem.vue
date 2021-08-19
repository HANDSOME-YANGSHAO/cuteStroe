<template>
  <div class="goodslistitem" @click="itemClick">
      <img :src="goodsitem.show.img" alt="" @load='refresh'>
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
  methods: {
    refresh() {
      this.$bus.$emit('refreshBSHeight')
    },
    itemClick() {
      this.$router.push('/detail/'+this.goodsitem.iid)
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