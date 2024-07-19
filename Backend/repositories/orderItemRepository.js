import OrderItem from './../models/OrderItemModel.js';

class OrderItemRepository {

    async createOrderItem(orderItemData) {
        return await OrderItem.create(orderItemData);
    }
}

export default new OrderItemRepository();