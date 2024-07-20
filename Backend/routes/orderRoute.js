import express from "express"
import orderController from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/:id', orderController.getById);
orderRouter.post('/', orderController.createOrder);

export default orderRouter;