import { DataTypes } from 'sequelize'
import sequelize from './index.js';

const Category = sequelize.define(
  'Category',
  {
    categoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
  },
);

export default Category;