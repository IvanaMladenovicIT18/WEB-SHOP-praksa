import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import sequelize from './models/index.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Hello!");
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server run in port ${PORT}`));