import { get, post } from "./request-manager"
// import { config } from "../../config"

export const createOrder = async payload => {
  return await post(`https://pos-system-yogi.herokuapp.com/api/order`, payload)
}

export async function getInvoiceByOrderId(order_id) {
  return await get(`https://pos-system-yogi.herokuapp.com/api/invoice/${order_id}`);
}

export async function getOrders(){
  return await get(`https://pos-system-yogi.herokuapp.com/api/order`);
}