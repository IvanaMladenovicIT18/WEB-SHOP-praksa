import express from "express"
import orderController from '../controllers/orderController.js';
import protect from "../middleware/Auth.js";

const orderRouter = express.Router();

orderRouter.get('/user/:id', protect, orderController.getAllByUser);
orderRouter.get('/:id', protect, orderController.getById);
orderRouter.post('/', protect, orderController.createOrder);

export default orderRouter;