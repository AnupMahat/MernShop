import { productsActionType } from './products.types'

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: '',
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionType.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case productsActionType.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case productsActionType.PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default productsReducer
