import Order from './../models/OrderModel.js';

class OrderRepository {

    async findAllByUser(userId) {
        return await Order.findAll({ where: { userID: userId } });
    }

    async findOrderById(id) {
        return await Order.findByPk(id);
    }
    
    async createOrder(orderData) {
        return await Order.create(orderData);
    }

    async updateOrder(id, updateData) {
        return await Order.update(updateData, {
            where: { id },
            returning: true 
        });
    }
}

export default new OrderRepository();