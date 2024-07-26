import "dotenv/config"
import express from "express"
import bodyParser from "body-parser";
import sequelize from './models/index.js';
import productRouter from "./routes/productRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import cors from "cors"
import orderRouter from "./routes/orderRoute.js";
import userRouter from './routes/userRoute.js';
import orderItemRouter from "./routes/ordemItemRoute.js";

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
app.use('/api/orderitems', orderItemRouter)

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server run in port ${PORT}`));