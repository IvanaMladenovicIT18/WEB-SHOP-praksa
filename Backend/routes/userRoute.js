
import express from 'express';
import userController from '../controllers/userController.js';
import protect from './../middleware/Auth.js';

const userRouter = express.Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.put('/users/profile', protect, userController.updateUser);

export default userRouter;