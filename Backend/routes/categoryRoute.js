import express from "express"
import categoryController from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.getAll);
categoryRouter.get('/:id', categoryController.getById);
categoryRouter.delete('/:id', categoryController.delete);

export default categoryRouter;