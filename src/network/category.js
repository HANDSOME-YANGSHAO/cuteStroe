import { request }  from './request'


// 请求分类数据
export function getCategory() {
  return request({
    url: "/category"
  });
}

// 根据当前选中的分类项目的ID去请求具体的展示数据
export function getCategoryInfo(maitKey) {
  return request({
    url: "/subcategory",
    params: { 
      maitKey
    }
  }); 
}

// 请求当前分类商品的具体数据展示
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}