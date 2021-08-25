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
      isShow: false,
      toastTimer: null
    }
  },
  methods: {
    show(message, duration=1500) {
      clearTimeout(this.toastTimer)
      this.isShow = true
      this.message = message
      this.toastTimer = setTimeout(() => {
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    background-color: rgb(0, 0, 0, 0.7);
    padding: 8px 10px;
    z-index: 999;
  }
</style>