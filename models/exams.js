const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const Exams = sequelize.define('exams', {
    id_pig: {
        type: Sequelize.CHAR(50),
        allowNull: false,
        references: {
            model: 'pigs',
            key: 'id'
        }
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ex_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    ex_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    feces: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tissue: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ex_result: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    medicine: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    medicine_qty: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    medicine_type: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    diarrhea: {
        type: Sequelize.CHAR(1),
        allowNull: false
    },
    weight: {
        type: Sequelize.FLOAT(5),
        allowNull: false
    },
    temperature: {
        type: Sequelize.FLOAT(3),
        allowNull: false
    },
    lameness: {
        type: Sequelize.CHAR(1),
        allowNull: false
    },
    respiratory_sys: {
        type: Sequelize.CHAR(1),
        allowNull: false
    },
    skin_changes: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Exams;