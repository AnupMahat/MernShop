import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from './products/products.reducer'
import productReducer from './product/product.reducer'
import cartReducer from './cart/cart-reducer'

const persistConfig = {
  key: 'root',
  storage: storage,
  whiteList: ['cart'],
}

const rootReducer = combineReducers({
  productList: productsReducer,
  product: productReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
