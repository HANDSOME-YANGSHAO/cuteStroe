import {ADD_COUNTR,ADD_TO_CART} from "./mutation_types"

export default {
  addTocar(context, payload) {
    // console.log(context)
    let oldShopItem = null
    oldShopItem  = context.state.cartList.find( item => payload.iid === item.iid)// 这里写一个等号的话会出错，因为一个等号是赋值运算符，是一个等式，赋值过后是字符串，非空串是真
    if(oldShopItem) {
      context.commit(ADD_COUNTR, oldShopItem)
    }else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
  }
}