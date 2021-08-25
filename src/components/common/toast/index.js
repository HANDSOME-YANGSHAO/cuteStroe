import Toast from './Toast'

const obj = {}

// 在安装组件的时候会自动调用install方法，并且向该方法内部传入一个参数
obj.install = function (Vue) {
  console.log('安装toast插件')
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2.new的方式,根据组件构造器可以创建出来一个组件对象
  const toast = new toastConstructor()

  // 3.将组件对象toast，手动的挂载到某个dom元素上面
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应的dom元素就是上述挂载的那个dom元素div（挂载到某个dom元素上其实是会把该组件对象的模板替换到该挂载元素的位置）
  // 上述模板被挂载到dom元素上之后才是实体node，此时组件对象的$el就是被挂载的模板（在此之前组件对象的$el是空的，且模板未被挂载），可以被放到document上的节点
  document.body.appendChild(toast.$el)
  
  Vue.prototype.$toast = toast;
}

export default obj