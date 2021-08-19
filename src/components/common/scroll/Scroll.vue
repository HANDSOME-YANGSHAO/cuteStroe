<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: 'scroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default(){
          return 0
        }
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 1.better-scroll的构造函数对象有两个初始参数，第一个是要管理的dom元素对象，第二个参数是传入一个对象，这个对象可以添加相关的属性进行
      //管理
      this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType: this.probeType,//0和1是不监听scroll的实时位置，2监听，但惯性不监听，3真正的实时监听
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      // 2.在组件挂载时候内部监听scroll，当probeType = 3的时候允许实时监听位置，把位置对象传到回调函数里面
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll',position)
      })

      // 3.如果需要监听上拉加载事件则监听事件，严谨！！
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
        })
      }
    },
    methods: {

      scrollTo(x,y,time=300) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh() {
        // 前面加上这个语句是因为，当scroll组件创建的时候，可能还没有挂载，就没有触发钩子函数去初始化scroll对象，还是null
        // 此时调用null类型的函数是报错的，所以这里加了这个判断，如果还没有挂载初始化的话，就不会执行到后面的刷新函数就不会报错
        // 此时即使图片频发的load触发也不会有太大的影响，因为会很快挂载完成，届时就可以调用刷新函数了，所以报错的情况应该是图片加载的太快了
        // 此时scroll组件都还未挂载完成就全部加载完成
        console.log('---重新计算滚动栏的滚动高度')
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
         this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        if(this.scroll){
          return this.scroll.y
        }
      }

  }
  }
</script>

<style scoped>

</style>