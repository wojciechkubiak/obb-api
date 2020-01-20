const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const Pigs = sequelize.define('pigs', {
    id_pen: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'pens',
            key: 'id'
        }
    },
    id: {
        type: Sequelize.CHAR(50),
        allowNull: false,
        primaryKey: true
    },
    pig_gender: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    pig_shopping_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    pig_shopping_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pig_sale_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    pig_selling_cost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pig_death_date: {
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

module.exports = Pigs;