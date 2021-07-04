import axios from 'axios'
import { all, put, call, takeLatest } from 'redux-saga/effects'
import { AddToCart } from './cart.actions'
import { cartActionType } from './cart.types'

export function* asyncRequestToCartProductDetail(action) {
  const { data } = yield axios.get(`/api/products/${action.payload.id}`)
  const productDetail = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty: action.payload.qty,
  }

  yield put(AddToCart(productDetail))
}

export function* requestAddToCartSaga() {
  yield takeLatest(
    cartActionType.START_ADDTO_CART,
    asyncRequestToCartProductDetail
  )
}

export function* cartSagas() {
  yield all([call(requestAddToCartSaga)])
}
