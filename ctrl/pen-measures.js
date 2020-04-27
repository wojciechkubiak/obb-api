const PenMeasures = require('../models/pen-measures');

exports.getAllPenMeasures = (require, result, next) => {
  PenMeasures.findAll()
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      result.status(400).json({error: error})
    })
}

exports.getPenMeasures = (require, result, next) => {
  const id = parseInt(require.params.id);

  PenMeasures.findAll({
    order: [
      ["measureDate", "DESC"]
    ],
      where: {
        idPen: id
      }
    })
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};

exports.getPenMeasuresLast = (require, result, next) => {
  const id = parseInt(require.params.id);

  PenMeasures.findAll({
      limit: 1,
      order: [
        ["measureDate", "DESC"]
      ],
      where: {
        idPen: id
      }
    })
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};

exports.postAddPenMeasure = (require, result, next) => {
  const upPenID = require.body.idPen;
  const upMeasureDate = require.body.measureDate;
  const upMeasureTime = require.body.measureTime;
  const upBreakdown = require.body.breakdown;
  const upDosatron = require.body.dosatron;
  const upAddition = require.body.addition;
  const upForage = require.body.forage;
  const upForageQty = require.body.forageQtyUsed;

  PenMeasures.create({
      idPen: upPenID,
      measureDate: upMeasureDate,
      measureTime: upMeasureTime,
      breakdown: upBreakdown,
      dosatron: upDosatron,
      addition: upAddition,
      forage: upForage,
      forageQtyUsed: upForageQty
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};

exports.postEditPenMeasure = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upPenID = require.body.idPen;
  const upMeasureDate = require.body.measureDate;
  const upMeasureTime = require.body.measureTime;
  const upBreakdown = require.body.breakdown;
  const upDosatron = require.body.dosatron;
  const upAddition = require.body.addition;
  const upForage = require.body.forage;
  const upForageQty = require.body.forageQtyUsed;
  const upWater = require.body.water;

  PenMeasures.update({
      idPen: upPenID,
      measureDate: upMeasureDate,
      measureTime: upMeasureTime,
      breakdown: upBreakdown,
      dosatron: upDosatron,
      addition: upAddition,
      forage: upForage,
      forageQtyUsed: upForageQty,
      water: upWater
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

exports.deletePenMeasure = (require, result, next) => {
  const id = parseInt(require.params.id);

  PenMeasures.destroy({
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