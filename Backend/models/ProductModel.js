import { DataTypes } from 'sequelize';
import sequelize from './index.js'; 
import Category from './CategoryModel.js'; 

const Product = sequelize.define(
    'Product',
    {
        productID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true
        },
        availableQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0 
        }
    },
    {
    }
);

Product.belongsTo(Category, {
    foreignKey: 'categoryID',
    allowNull: false,
    onDelete: 'CASCADE'
});

export default Product;
