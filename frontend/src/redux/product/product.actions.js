import { productActionType } from './product.types'

export const requestProductDetail = (id) => ({
  type: productActionType.PRODUCT_DETAIL_REQUEST,
  payload: id,
})

export const productDetailSuccess = (data) => ({
  type: productActionType.PRODUCT_DETAIL_SUCCESS,
  payload: data,
})

export const productDetailFail = (error) => ({
  type: productActionType.PRODUCT_DETAIL_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
})
