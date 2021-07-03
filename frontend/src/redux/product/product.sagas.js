import { productActionType } from './product.types'
import axios from 'axios'
import { all, put, takeLatest, call } from 'redux-saga/effects'
import { productDetailFail, productDetailSuccess } from './product.actions'

export function* requestProductDetailAsync(action) {
  try {
    const { data } = yield axios.get(`/api/products/${action.payload}`)
    yield put(productDetailSuccess(data))
  } catch (error) {
    yield put(productDetailFail(error))
  }
}

//listens to action
export function* requestProductDetailSaga() {
  yield takeLatest(
    productActionType.PRODUCT_DETAIL_REQUEST,
    requestProductDetailAsync
  )
}

export function* productSagas() {
  yield all([call(requestProductDetailSaga)])
}
