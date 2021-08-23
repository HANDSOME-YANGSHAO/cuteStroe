// 这里抽离出来的好处就是方便维护，当项目逐渐大起来的时候，许多组件都需要在不同的地方去改变公共状态，
// 而公共状态又是通过actions里的方法调mutations里面的方法去改变state此时会有许多的action会去commit
// commit这个方法的参数全是mutation方法名，每当mutation方法或方法名改变的时候，就要去专门去每个commit参数里面改
// 而抽离出来就不用那么麻烦了，并且结构是清晰的
export const ADD_COUNTR = 'add_counter'
export const ADD_TO_CART = 'add_to_cart'