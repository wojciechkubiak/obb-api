const PenMeasures = require('../models/penMeasures');

exports.getAllPenMeasures = (require, result, next) => {
  PenMeasures.findAll()
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      console.log(error);
    })
}

exports.getPenMeasures = (require, result, next) => {
  const id = parseInt(require.params.id);

  PenMeasures.findAll({
      where: {
        id_pen: id
      }
    })
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postAddPenMeasure = (require, result, next) => {
  const upPenID = require.body.id_pen;
  const upMeasureDate = require.body.measure_date;
  const upMeasureTime = require.body.measure_time;
  const upBreakdown = require.body.breakdown;
  const upDosatron = require.body.dosatron;
  const upAddition = require.body.addition;
  const upForage = require.body.forage;
  const upForageQty = require.body.forage_qty_used;
  const upWater = require.body.water;

  GlobalMeasures.create({
      id_pen: upPenID,
      measure_date: upMeasureDate,
      measure_time: upMeasureTime,
      breakdown: upBreakdown,
      dosatron: upDosatron,
      addition: upAddition,
      forage: upForage,
      forage_qty_used: upForageQty,
      water: upWater
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postEditPenMeasure = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upPenID = require.body.id_pen;
  const upMeasureDate = require.body.measure_date;
  const upMeasureTime = require.body.measure_time;
  const upBreakdown = require.body.breakdown;
  const upDosatron = require.body.dosatron;
  const upAddition = require.body.addition;
  const upForage = require.body.forage;
  const upForageQty = require.body.forage_qty_used;
  const upWater = require.body.water;

  PenMeasures.update({
      id_pen: upPenID,
      measure_date: upMeasureDate,
      measure_time: upMeasureTime,
      breakdown: upBreakdown,
      dosatron: upDosatron,
      addition: upAddition,
      forage: upForage,
      forage_qty_used: upForageQty,
      water: upWater
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

exports.deletePenMeasure = (require, result, next) => {
  const id = require.params.id;

  PenMeasures.destroy({
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