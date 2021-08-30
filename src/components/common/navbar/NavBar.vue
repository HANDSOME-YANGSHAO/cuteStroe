<template>
  <div class="navBar">
    <!--我们想给slot位置的元素设置一定的样式，但经过渲染之后，slot会连其属性被父组件加到组件对应插槽位置的元素给替换掉
        ，name属性除外（具名插槽标识符），所以你让slot设置id或类名改变样式是不可行的，会被覆盖的
    -->
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navBar'
}

</script>

<style>
  .navBar{
    font-size: 15px;
    display: flex;
    height: 44px;
    line-height: 44px;
    /* 行高和容器高度一致的话，会让文字垂直居中，然后text-align属性可以实现文字在容器里水平居中 */
    text-align: center;
    box-shadow: 0 1px 1px rgb(100,100,100,0.1);
    background-color:  #FF5677;
    color: #FFF;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>