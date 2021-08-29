<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles"
         :key="index"
         :class="{active: currentIndex === index}"
         @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabcontrol',
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.$bus.$emit('toTop')
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  
  .active{
    color: var(--color-tint);
  }

  .active span {
    border-bottom: 5px var(--color-tint) solid;
  }
</style>