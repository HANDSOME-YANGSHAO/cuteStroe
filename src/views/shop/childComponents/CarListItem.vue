<template>
  <div class="item-wrapper flex">
    <div class="check">
      <checked-box
        :isChecked="product.checked"
        @click.native="checkClick" 
        class="check-item" />
    </div>
    <div class="cart-img flex">
      <img :src="product.img">
    </div>
    <div class="cart-info">
      <div class="top">
        <div class="title"><p>{{product.title}}</p></div>
        <div class="desc"><p>{{product.desc}}</p></div>
      </div>
      <div class="bottom flex">
        <span class="bottom-price">￥{{product.price}}</span>
        <span>x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedBox from 'components/content/checkedbox/CheckedBox'

export default {
  name:'CarListItem',
  props: {
    product: {
      typeof: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckedBox
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }
  .item-wrapper {
    height: 130px;
    border-bottom: 1px solid rgba(48, 46, 46, 0.288);
  }
  .check { 
    width: 10%;
  }
  .cart-img {
    width: 25%;
  }
  .cart-img img {
    border-radius: 10%;
    padding-top: 10px;
    height: 120px;
    width: 80px;
  }
  .cart-info {
    width: 65%;
  }
  .top {
    padding: 10px; 
    height: 70%; 
  }
   .top p{
     white-space:nowrap;        /* 不换行 */
     overflow:hidden;           /* 内容超出宽度时隐藏超出部分的内容 */
     text-overflow:ellipsis;    /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/  
   }
   .title {
     font-size: 12px;
     margin: top 10px;
   }
   .desc {
     margin-top: 10px;
     font-size: 10px;
     color: #A9A9A9;
   }
   .bottom {
     font-size: 20px;
     font-weight: 400;
     padding: 10px;
     justify-content: space-between;
   }
   .bottom-price {
     color: rgb(250, 36, 36);   
   }
   .check-item {
     margin: 60px auto;
   }
</style>