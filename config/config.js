require('dotenv').config();
const {createPool}=require('mysql2');
const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    multipleStatements: true,
    connectionLimit: 300000000
});
module.exports = connection;