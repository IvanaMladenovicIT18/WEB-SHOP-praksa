import orderItemRepository from "../repositories/orderItemRepository.js";

class OrderItemService {
    
    async getAllItemsByOrder(orderId) {
        return await orderItemRepository.getOrderItemsByOrderId(orderId);
    }

}

export default new OrderItemService();
