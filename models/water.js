const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const Water = sequelize.define('waters', {
    idPen: {
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
        autoIncrement: true,
        primaryKey: true
    },
    measureDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    measureTime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    water: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Water;