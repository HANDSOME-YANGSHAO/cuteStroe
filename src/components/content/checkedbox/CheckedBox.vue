<template>
  <div class="checkbox">
    <img 
      v-if="isChecked"
      src="~assets/img/shop/Hook.svg" />
  </div>
</template>

<script>
export default {
  name: 'CheckedBox',
  props: {
    isChecked: {
      typeof: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .checkbox {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:2px solid rgb(117, 117, 117)
  }
  .checkbox img{
    position: relative;
    width: 18px;
    height: 18px;
    left: -1px;
  }
</style>