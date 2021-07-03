import { cartActionType } from './cart.types'

const INITIAL_STATE = {
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case cartActionType.CART_REMOVE_ITEM:
      return {}
    default:
      return state
  }
}

export default cartReducer
