// 1：引入vue 和 vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2：让vue使用路由插件
Vue.use(VueRouter)

// 3: 创建路由对象，引入路径属性
const Home = () => import('views/home/Home.vue')
const Cate = () => import('views/cate/Cate.vue')
const Shop = () => import('views/shop/Shop.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')


const routes  = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cate',
    component: Cate
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail  
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
