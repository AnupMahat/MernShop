import { all, call } from 'redux-saga/effects'
import { productsListSagas } from './products/products.sagas'
import { productSagas } from './product/product.sagas'

export default function* rootSaga() {
  yield all([call(productsListSagas), call(productSagas)])
}
