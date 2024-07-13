import { DataTypes } from 'sequelize'
import sequelize from './index.js';

const User = sequelize.define(
  'User',
  {
    userID: {
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
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^[0-9\-+]+$/i 
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registrationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
  },
  {
  },
);

export default User;