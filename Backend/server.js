import "dotenv/config"
import express from "express"
import bodyParser from "body-parser";
import sequelize from './models/index.js';
import productRouter from "./routes/productRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import cors from "cors"
import Category from "./models/CategoryModel.js";
import Product from "./models/ProductModel.js";
import Order from "./models/OrderModel.js";
import OrderItem from "./models/OrderItemModel.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from './routes/userRoute.js';

//dotenv.config();
const app = express();

app.use(cors({
    origin:'http://localhost:5173'
}));

app.use(bodyParser.json());

// routers
app.use('/api/products', productRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/orders', orderRouter)
app.use('/api', userRouter)

// testing api
app.get('/', (req, res) => {
    res.send("Hello!");
});

// const syncDatabase = async () => {
//     try {
//         await sequelize.sync({ alter: true });
//         console.log('Database synchronized successfully.');
//     } catch (error) {
//         console.error('Error synchronizing database:', error);
//     }
// };

// syncDatabase();

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server run in port ${PORT}`));