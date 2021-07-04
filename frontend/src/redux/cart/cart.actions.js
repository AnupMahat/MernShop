import { cartActionType } from './cart.types'

export const startAddToCart = (id, qty) => ({
  type: cartActionType.START_ADDTO_CART,
  payload: { id, qty },
})

export const AddToCart = (productDetail) => ({
  type: cartActionType.CART_ADD_ITEM,
  payload: productDetail,
})
