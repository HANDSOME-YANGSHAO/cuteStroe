//该页面封装了home首页相关的网络请求

import {request} from 'network/request'

//请求轮播图数据
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}


//请求商品goods分类的数据
export function getHomeGoods(type,page){
  return request({
    url:'home/data',
    params: {
      type,
      page
    }
  })

  
}