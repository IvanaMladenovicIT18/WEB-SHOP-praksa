import express from "express"
import orderItemController from "../controllers/orderItemController.js";
import protect from './../middleware/Auth.js';

const orderItemRouter = express.Router();

orderItemRouter.get('/order/:id', protect, orderItemController.getAllItemsByOrder);

export default orderItemRouter;