import { request } from "./request";
// 请求详情页的总数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

// 请求推荐的商品数据
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}


// 面向对象编程的思想，这个类是用来整合轮播图下面那块展示数据的组件的数据用的，因为请求过来
// 的总数据是很多很杂的，用这个类的实例就可以很好的整合相关的数据，该类是面对第二个组件的（存储数据用的）
export class Goods {
  constructor(itemInfo, columns, serveices) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = serveices
    this.realPrice = itemInfo.lowNowPrice
  }
}

//店铺信息
export class Shop {
	constructor(shopInfo) {
	  this.shopLogo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.score = shopInfo.score;
		this.cSells = shopInfo.cSells;
		this.cGoods = shopInfo.cGoods;
	}
}

// 商品的参数信息
export class GoodsParams {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
