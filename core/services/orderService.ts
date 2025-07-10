import { apiClient } from "../api/clients/apiClient";
import { orderEndpoints } from "../api/endpoints/order";

export const OrderService = {
  getOrders: () => apiClient.get(orderEndpoints.list),
  getOrder: (id: string) => apiClient.get(orderEndpoints.detail(id)),
  createOrder: (data: any) => apiClient.post(orderEndpoints.create, data),
};
