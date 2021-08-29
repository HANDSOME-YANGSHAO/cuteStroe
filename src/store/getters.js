export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  // 这个计算属性是根据购物车里面的物品的checked状态判断当前购物车是否是全选的状态，是实时的反映出当前购物车的物品是否全部被选中
  isAllChecked(state) {
    // 购物车不为空的话才去判断
    if (state.cartList.length !==0) {
      // 1.  我自己的判断方法，过滤所有选中的，再比较选中状态的物品和总物品的数量是否相等，但是效率有些低
      // let checkedLength = state.cartList.filter(item => {
      //   return item.checked === true
      // }).length
      // return state.cartList.length === checkedLength

      // 2. 老师的优化方法，用find方法，只要找到了没有选中的就会返回这个物品对象，取反之后就为false，只要有没选中的就认为不是全选
      // 反之，一旦全选find函数就没有找到对应的值，返回0，取反为真，认为全部选中
      return !state.cartList.find(item => !item.checked)
    }
    // 购物车为空全选默认是不选中的,返回false
    return false
  },
  checkedLength (state) {
    return state.cartList.filter(item => item.checked ).length
  }
}