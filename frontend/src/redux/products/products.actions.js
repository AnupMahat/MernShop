import { productsActionType } from './products.types'

export const listProducts = () => ({
  type: productsActionType.PRODUCT_LIST_REQUEST,
})

export const listProductsSuccess = (data) => ({
  type: productsActionType.PRODUCT_LIST_SUCCESS,
  payload: data,
})

export const listProductsFail = (error) => ({
  type: productsActionType.PRODUCT_LIST_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
})
