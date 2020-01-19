import 'dotenv/config';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.LOCAL_NAME, 
    process.env.LOCAL_USER, 
    process.env.LOCAL_PASS, {
    dialect: 'mysql',
    host: process.env.LOCAL_HOST
})

module.exports = sequelize;