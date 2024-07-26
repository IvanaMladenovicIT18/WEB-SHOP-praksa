import orderItemService from "../services/orderItemService.js";

class OrderItemController {

    async getAllItemsByOrder(req, res) {
        try {
            const { id } = req.params;
            const orderItems = await orderItemService.getAllItemsByOrder(id);
            if (!orderItems.length) {
                return res.status(404).json({ message: 'No items found for this order' });
            }
            res.json(orderItems);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

}

export default new OrderItemController();
