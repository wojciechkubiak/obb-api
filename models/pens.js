const Sequelize = require('sequelize');
const sequelize = require('../utility/connection');

const Pens = sequelize.define('pens', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    size: {
        type:Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Pens;