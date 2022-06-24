import { put } from './request-manager'

export const saveCart = async (token, cart) => {
  return await put(`https://market-place-yogi.herokuapp.com/api/cart`, {items: cart})
}