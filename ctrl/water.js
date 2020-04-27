const Water = require("../models/water");
const {
  Op
} = require("sequelize");

//TODO: POST DOESNT WORK

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
      result.status(400).json({error: error})
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
      result.status(400).json({error: error})
    });
};

// TODO: exports.getLastWaterDataForAllPens last for all pens

exports.postWaterEntry = (require, result, next) => {
  const id = parseIntrequire.params.idPen;
  const newMeasureDate = require.body.measureDate;
  const newMeasureTime = require.body.measureTime;
  const newWater = require.body.waterInit;
  const newWaterUsed = require.body.waterUsed;

  Water.create({
      idPen: id,
      measureDate: newMeasureDate,
      measureTime: newMeasureTime,
      waterInit: newWater,
      waterUsed: newWaterUsed
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};

exports.postEditWaterEntry = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upMeasureDate = require.body.measureDate;
  const upMeasureTime = require.body.measureTime;
  const upWater = require.body.waterInit;
  const upUsedWater = require.body.waterUsed;

  Water.update({
      measureDate: upMeasureDate,
      measureTime: upMeasureTime,
      waterInit: upWater,
      waterUsed: upUsedWater
    }, {
      where: {
        id: id
      }
    })
    .then(res => {
      result.send(`Updated ${res}`);
    })
    .catch(error => {
      result.status(400).json({error: error})
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
      result.send(`Updated ${res}`);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};