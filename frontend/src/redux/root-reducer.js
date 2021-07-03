import { combineReducers } from 'redux'

import productsReducer from './products/products.reducer'
import productReducer from './product/product.reducer'
import cartReducer from './cart/cart-reducer'

const rootReducer = combineReducers({
  productList: productsReducer,
  product: productReducer,
  cart: cartReducer,
})

export default rootReducer
