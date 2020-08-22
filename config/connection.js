const Sequelize = require('sequelize');

require('dotenv').config();

// Connection to Database
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize('techblog_db', 'root', 'password', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    });

module.exports = sequelize;