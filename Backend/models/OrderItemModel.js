import { DataTypes } from 'sequelize';
import sequelize from './index.js'; 
import Order from './OrderModel.js';
import Product from './ProductModel.js';

const OrderItem = sequelize.define('OrderItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1 
    },
    itemPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
   }
);

OrderItem.belongsTo(Order, {
    foreignKey: 'orderID',
    allowNull: false,
    onDelete: 'CASCADE'
});

OrderItem.belongsTo(Product, {
    foreignKey: 'productID',
    allowNull: false,
    onDelete: 'CASCADE'
});

export default OrderItem;
