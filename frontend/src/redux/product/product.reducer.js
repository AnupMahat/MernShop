import { productActionType } from './product.types'

const INITIAL_STATE = {
  product: {},
  loading: false,
  error: '',
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionType.PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case productActionType.PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      }
    case productActionType.PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
