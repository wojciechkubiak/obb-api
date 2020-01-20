const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const PenMeasures = sequelize.define('pen_measures', {
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
        autoIncrement: true,
        primaryKey: true
    },
    measure_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    measure_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    breakdown: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    dosatron: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    addition: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    forage: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    forage_qty_used: {
        type: Sequelize.FLOAT(5),
        allowNull: false
    },
    water: {
        type: Sequelize.SMALLINT,
        allowNull: false
    }
});

module.exports = PenMeasures;