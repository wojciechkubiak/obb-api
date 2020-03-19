const GlobalMeasures = require("../models/global");

exports.getGlobalMeasures = (require, result, next) => {
  GlobalMeasures.findAll({
      order: [
        ["measureDate", "DESC"]
      ]
    })
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getLatestGlobalMeasures = (require, result, next) => {
  GlobalMeasures.findAll({
      limit: 10,
      order: [
        ["measureDate", "DESC"]
      ]
    })
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postAddGlobalMeasure = (require, result, next) => {
  const newMeasureDate = require.body.measureDate;
  const newMeasureTime = require.body.measureTime;
  const newNHThree = require.body.nhThree;
  const newHTwoS = require.body.hTwoS;
  const newCOTwo = require.body.coTwo;
  const newTemperature = require.body.temperature;
  const newWetness = require.body.wetness;

  GlobalMeasures.create({
      measureDate: newMeasureDate,
      measureTime: newMeasureTime,
      nhThree: newNHThree,
      hTwoS: newHTwoS,
      coTwo: newCOTwo,
      temperature: newTemperature,
      wetness: newWetness
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postEditGlobalMeasure = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upMeasureDate = require.body.measureDate;
  const upMeasureTime = require.body.measureTime;
  const upNHThree = require.body.nhThree;
  const upHTwoS = require.body.hTwoS;
  const upCOTwo = require.body.coTwo;
  const upTemperature = require.body.temperature;
  const upWetness = require.body.wetness;

  GlobalMeasures.update({
      measureDate: upMeasureDate,
      measureTime: upMeasureTime,
      nhThree: upNHThree,
      hTwoS: upHTwoS,
      coTwo: upCOTwo,
      temperature: upTemperature,
      wetness: upWetness
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

exports.deleteGlobalMeasure = (require, result, next) => {
  const id = parseInt(require.params.id);

  GlobalMeasures.destroy({
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