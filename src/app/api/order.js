import { get, post } from "./request-manager"
// import { config } from "../../config"

export const createOrder = async payload => {
  return await post(`https://yogi-pos-system.netlify.app/api/order`, payload)
}

export async function getInvoiceByOrderId(order_id) {
  return await get(`https://yogi-pos-system.netlify.app/api/invoice/${order_id}`);
}

export async function getOrders(){
  return await get(`https://yogi-pos-system.netlify.app/api/order`);
}