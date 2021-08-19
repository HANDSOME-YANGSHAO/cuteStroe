<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>
<script>

import mainTabBar from 'components/content/mainTabBar/maintabbar'

export default {
  name: 'app',
  components:{
    mainTabBar
  } 
}

</script>

<style>
@import "assets/css/base.css";

</style>
