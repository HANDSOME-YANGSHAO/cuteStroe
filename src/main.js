import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast' // 引入toast文件下面的index.js文件中默认的导出对象
// import FastClick from 'fastclick'// 这是一个脚本库，属于代码解决移动端300ms点击延迟的方案
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast) //use方法会调用该对象的install方法去进行一系列针对该对象的安装操作

// 图片懒加载,后面传入的参数对象是可选的，可去github上面看看有哪些可用的参数
// 同时要把之前图片里面 :src= 换成 v-lazy=
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/c.gif')
})
  
// 解决移动端300ms延迟问题，安装这个fastclick库
// FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
