import OrderService from './../services/orderService.js';


class OrderController {

    async getAllByUser(req, res) {
        try {
            const userId = 1; // kad uradim login --> promeni ovo
            console.log(userId)
            const orders = await OrderService.getAllOrdersByUser(userId);
            res.json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    async getById(req, res) {
        const order = await OrderService.getOrderById(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
            throw new Error("Order not found");
        }
    }

    async createOrder(req, res) {
        try {
            const { userID, products } = req.body;
            const result = await OrderService.createOrder(userID, products);
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new OrderController();