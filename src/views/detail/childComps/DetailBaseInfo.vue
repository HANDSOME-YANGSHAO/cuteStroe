<template>
    <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
      <div class="info-title">{{goodsInfo.title}}</div>
      <div class="info-price">
        <span class="n-price">{{goodsInfo.newPrice}}</span>
        <span class="o-price">{{goodsInfo.oldPrice}}</span>
        <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
      </div>
      <div class="info-other">
        <span>{{goodsInfo.columns[0]}}</span>
        <span>{{goodsInfo.columns[1]}}</span>
        <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
      </div>
      <div class="info-service">
        <span class="info-service" v-for="index in goodsInfo.services.length-1" :key="index">
          <img :src="goodsInfo.services[index-1].icon">
          <span>{{goodsInfo.services[index-1].name}}</span>
        </span>
      </div>
    </div>
</template>

<script>

export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

</script>

<style scoped>
  .info-title {
    font-weight: 700;
    line-height: 21px;
    color: #000000;
    padding: 10px
  }
  .info-price {
    margin: 0 10px
  }
  .n-price {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-tint);   
  }
  .o-price {
    margin-left: 10px;
    font-size: 10px;
    text-decoration:line-through
  }
  .discount {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: var(--color-tint);
    font-size: 15px;
    color: #FAFAFA;
    border-radius: 20%;
    position: relative;
    top: -5px
  }
  .info-other {
    margin: 15px 0;
    padding: 0 8px 5px 8px;
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    border-bottom: 1px solid #03030321 ;
  }
  .info-service{
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
  }
  .info-service span{
    font-size: 10px;
  }
  .info-service img{
    height: 12px;
  }
   div.info-service{
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 5px solid #eee;
  }
</style>