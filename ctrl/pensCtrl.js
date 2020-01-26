const Pens = require('../models/pens');

exports.getPens = (require, result, next) => {
  Pens.findAll()
    .then(pens => {
      result.status(200).json(pens);
    })
    .catch(error => {
      console.log(error);
    })
}

exports.postEditPen = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upSize = require.body.size;
  const upIsolated = require.body.isolated;

  Pens.update({
      size: upSize,
      isolated: upIsolated
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