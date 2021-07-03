import { productsActionType } from './products.types'
import axios from 'axios'
import { all, put, takeLatest, call } from 'redux-saga/effects'
import { listProductsFail, listProductsSuccess } from './products.actions'

export function* requestProductListAsync() {
  try {
    const { data } = yield axios.get('/api/products')
    yield put(listProductsSuccess(data))
  } catch (error) {
    yield put(listProductsFail(error))
  }
}

//listens to action
export function* requestProductListSaga() {
  yield takeLatest(
    productsActionType.PRODUCT_LIST_REQUEST,
    requestProductListAsync
  )
}

//compile all sagas
export function* productsListSagas() {
  yield all([call(requestProductListSaga)])
}
