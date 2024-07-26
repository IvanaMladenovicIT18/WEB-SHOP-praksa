import { DataTypes } from 'sequelize'
import sequelize from './index.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define(
  'User',
  {
    id: {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
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

User.beforeCreate(async (user) => {
    if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
});

User.prototype.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default User;