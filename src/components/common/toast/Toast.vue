<template>
  <div id="toast" v-show="isShow">
    <div class="toast-message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration=1500) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration) 
    }
  }
}
</script>

<style scoped>
  .toast-message {
    /* 让这个弹窗居中的样式 */
    font-size: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    background-color: rgb(0, 0, 0, 0.7);
    padding: 10px 15px;
    z-index: 999;
    border-radius: 5px;
    box-shadow: 0 0 4px solid #aaa;
  }
</style>