const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const Forage = sequelize.define('forage', {
    id_pen: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'pens',
            key: 'id'
        }
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fg_about: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    fg_qty: {
        type: Sequelize.FLOAT(10),
        allowNull: false
    },
    fg_price: {
        type: Sequelize.FLOAT(5),
        allowNull: false
    },
    creation_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    producer: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    expiration: {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Forage;