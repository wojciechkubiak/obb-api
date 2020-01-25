const GlobalMeasures = require("../models/global");

exports.getGlobalMeasures = (require, result, next) => {
  GlobalMeasures.findAll()
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getLatestGlobalMeasures = (require, result, next) => {
  GlobalMeasures.findAll({
    limit: 1,
    order: [["createdAt", "DESC"]]
  })
    .then(measures => {
      result.status(200).json(measures);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postAddGlobalMeasure = (require, result, next) => {
  const newMeasureDate = require.body.measure_date;
  const newMeasureTime = require.body.measure_time;
  const newNHThree = require.body.nh_three;
  const newHTwoS = require.body.h_two_s;
  const newCOTwo = require.body.co_two;
  const newTemperature = require.body.temperature;
  const newWetness = require.body.wetness;

  GlobalMeasures.create({
    measure_date: newMeasureDate,
    measure_time: newMeasureTime,
    nh_three: newNHThree,
    h_two_s: newHTwoS,
    co_two: newCOTwo,
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

  const upMeasureDate = require.body.measure_date;
  const upMeasureTime = require.body.measure_time;
  const upNHThree = require.body.nh_three;
  const upHTwoS = require.body.h_two_s;
  const upCOTwo = require.body.co_two;
  const upTemperature = require.body.temperature;
  const upWetness = require.body.wetness;

  GlobalMeasures.update(
    {
      measure_date: upMeasureDate,
      measure_time: upMeasureTime,
      nh_three: upNHThree,
      h_two_s: upHTwoS,
      co_two: upCOTwo,
      temperature: upTemperature,
      wetness: upWetness
    },
    {
      where: {
        id: id
      }
    }
  )
    .then(res => {
      console.log("Updated");
    })
    .catch(error => {
      console.log(error);
    });
};

exports.deleteGlobalMeasure = (require, result, next) => {
  const id = require.params.id;

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
