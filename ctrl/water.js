const Water = require("../models/water");
const {
  Op
} = require("sequelize");

exports.getLastWaterData = (require, result, next) => {
  Water.findAll({
      limit: 1,
      order: [
        ["createdAt", "DESC"]
      ],
      where: {
        idPen: id
      }
    })
    .then(water => {
      result.status(200).json(water);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getAllWaterData = (require, result, next) => {
  const id = parseInt(require.params.id);

  Water.findAll({
      where: {
        idPen: id
      }
    })
    .then(water => {
      result.status(200).json(water);
    })
    .catch(error => {
      console.log(error);
    });
};

// TODO: exports.getLastWaterDataForAllPens last for all pens

exports.postWaterEntry = (require, result, next) => {
  const id = parseIntrequire.params.idPen;
  const newMeasureDate = require.body.measureDate;
  const newMeasureTime = require.body.measureTime;
  const newWater = require.body.water;

  Water.create({
      idPen: id,
      measureDate: newMeasureDate,
      measureTime: newMeasureTime,
      water: newWater
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postEditWaterEntry = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upMeasureDate = require.body.measureDate;
  const upMeasureTime = require.body.measureTime;
  const upWater = require.body.water;

  Water.update({
      water: upWater,
      measureDate: upMeasureDate,
      measureTime: upMeasureTime
    }, {
      where: {
        id: id
      }
    })
    .then(res => {
      console.log("Updated");
    })
    .catch(error => {
      console.log(error);
    });
};

exports.deleteWaterEntry = (require, result, next) => {
  const id = parseInt(require.params.id);

  Water.destroy({
      where: {
        id: id
      }
    })
    .then(res => {
      console.log("Updated");
    })
    .catch(error => {
      console.log(error);
    });
};