<template>
  <div class="tool-bar">
    <div class="tool-bar-left">
      <checked-box @click.native="allCheck" :isChecked="isAllChecked"/>
      <span>全选</span>
    </div>
    <div class="tool-bar-center"><span>合计:{{totalPrice}}</span></div>
    <div class="tool-bar-right" @click="settlement"><span>去结算({{checkedLength}})</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckedBox from 'components/content/checkedbox/CheckedBox'
export default {
  name: 'CartBottomBar',
  data() {
    return {
      tip: '请选择商品'
    }
  },
  components: {
    CheckedBox
  },
  computed: {
    ...mapGetters({
      checkedLength: 'checkedLength',
      cartlist: 'cartList',
      isAllChecked: 'isAllChecked'
    }),
    totalPrice() {
      return '￥' + this.cartlist.filter(item => {
        return item.checked === true
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    }
  },
  methods: {
    changeState(boolean) {
      // 这里其实直接用forEach循环直接更改cartLsit会更好，我这个效率要低一些
      this.$store.state.cartList = this.$store.state.cartList.map(item => {
            if (boolean && !item.checked) {
              item.checked = boolean
            }else{
              item.checked = boolean
            }
        return item
      })
    },
    allCheck() {
      if (!this.isAllChecked && this.cartlist.length !==0) {
        this.changeState(true)
      } else{
        this.changeState(false)
      }
    },
    settlement() {
      if (!this.checkedLength) {
        this.$toast.show(this.tip, 2000)
      }
    }
  }
}
</script>

<style scoped>
  .tool-bar {
    font-size: 15px;
    display: flex;
    height: 40px;
    justify-content: space-between;
    box-shadow: 0px 0px 4px #888888;
  }
  .tool-bar-left {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tool-bar-center {
    line-height: 40px;
    height: 100%;
    width: 40%;
    padding: left 10px;
  }
  .tool-bar-right {
    color: #fff;
    line-height: 40px;
    text-align: center;
    height: 100%;
    width: 30%;
    background-color: #ff6113;
  }
</style>