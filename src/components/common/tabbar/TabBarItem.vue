<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tab-bar-icon"></slot></div>
    <div v-else><slot name="tab-bar-icon-active"></slot></div>
    <div :style="colorStyle"><slot name="tab-bar-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path: String,
    activeColor: {
      type: String,
      default:"red"
    }
  },
  data(){
    return{
      // isActive: true
    }
  },
  methods: {

    itemClick(){
      this.$router.replace(this.path).catch(err => {err})
    }

  },
  computed: {
    isActive(){
       return this.$route.path.indexOf(this.path) !== -1
    },
    colorStyle(){
       return this.isActive?{color:this.activeColor}:{}
    }
  }

}

</script>

<style>
  
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

/* 
.active{
  color: red;
} */
</style>
