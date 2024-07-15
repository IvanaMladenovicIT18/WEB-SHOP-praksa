import express from "express"
import productController from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getById);
productRouter.get('/category/:categoryId', productController.getAllByCategory);
productRouter.delete('/:id', productController.delete);

export default productRouter;