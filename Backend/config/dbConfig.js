const dbConfig = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: 'mysql'
}

export default dbConfig;