
import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.put('/users/:id', userController.updateUser);

export default userRouter;