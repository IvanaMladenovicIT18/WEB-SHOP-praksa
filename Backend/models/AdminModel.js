import { DataTypes } from 'sequelize'
import sequelize from './index.js';

const Admin = sequelize.define(
  'Admin',
  {
    adminID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
  },
  {
  },
);

export default Admin;