import {Sequelize, DataTypes} from 'sequelize'
import dbConfig from '../config/dbConfig.js'

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
)

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.sequelize.sync({ force: true })
//   .then(() => {
//     console.log("Database & tables created!");
//   })
//   .catch(err => {
//     console.log("Error creating database & tables:", err);
//   });

export default sequelize;
