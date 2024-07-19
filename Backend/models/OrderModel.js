import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './index.js';
import User from './UserModel.js';

const Order = sequelize.define(
    'Order',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    },
    {
    }
);

Order.belongsTo(User, {
    foreignKey: 'userID',
    allowNull: true,
    onDelete: 'CASCADE'
});

export default Order;