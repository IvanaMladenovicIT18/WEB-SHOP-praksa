import Product from '../models/ProductModel.js';
import OrderItem from './../models/OrderItemModel.js';

class OrderItemRepository {

    async getOrderItemsByOrderId(orderId) {
        return await OrderItem.findAll({
            where: { orderID: orderId },
            include: [
                {
                    model: Product,
                    attributes: ['name', 'description', 'price', 'image', 'size']
                }
            ]
        })
    }

    async createOrderItem(orderItemData) {
        return await OrderItem.create(orderItemData);
    }
}

export default new OrderItemRepository();