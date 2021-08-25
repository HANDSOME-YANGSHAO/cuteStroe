import {ADD_COUNTR,ADD_TO_CART} from "./mutation_types"

export default {
     // 这里相当于用一个字符常量的值，作为mutation的函数名，然后action调用commit的时候，直接调用那个字符常量就行了
    [ADD_COUNTR](state, payload) {
      payload.count++
    },
    [ADD_TO_CART](state, payload) {
      payload.checked = true // 一旦商品添加至购物车中，默认它是选中状态
      state.cartList.push(payload)
    }
}