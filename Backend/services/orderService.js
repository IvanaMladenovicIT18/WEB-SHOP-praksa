import OrderItemRepository from '../repositories/orderItemRepository.js';
import OrderRepository from './../repositories/orderRepository.js';
import ProductRepository from './../repositories/productRepository.js';

class OrderService {

    async getOrderById(id) {
        return await OrderRepository.findOrderById(id);
    }

    async createOrder(userID, products) {
        if (!products || !Array.isArray(products)) {
            throw new Error('Invalid input data');
        }

        //kreiranje porudzbine
        const order = await OrderRepository.createOrder({
            userID,
            totalPrice: 0,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toISOString().split('T')[1].split('.')[0]
        });

        let totalPrice = 0;

        // prolazak kroz stavke iz korpe
        for (const product of products) {
            const { id, quantity } = product;
            const productData = await ProductRepository.findById(id);

            if (!productData) {
                throw new Error(`Product with ID ${id} not found`);
            }

            const itemPrice = productData.price;
            totalPrice += itemPrice * quantity;

            //kreiranje stavke porudzbine
            await OrderItemRepository.createOrderItem({
                orderID: order.id,
                quantity,
                itemPrice
            });
        }

        await OrderRepository.updateOrder(order.id, { totalPrice });

        return { order, totalPrice };
    }
}

export default new OrderService();