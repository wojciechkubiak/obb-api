const Sequelize = require('sequelize');

const sequelize = require('../utility/connection');

const Exams = sequelize.define('exams', {
    idPig: {
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
    exDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    exTime: {
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
    exResult: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    medicine: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    medicineQty: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    medicineType: {
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
    respiratorySys: {
        type: Sequelize.CHAR(1),
        allowNull: false
    },
    skinChanges: {
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