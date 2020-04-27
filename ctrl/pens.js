const Pens = require('../models/pens');

exports.getPens = (require, result, next) => {
  Pens.findAll()
    .then(pens => {
      result.status(200).json(pens);
    })
    .catch(error => {
      result.status(400).json({error: error})
    })
}

exports.getSinglePen = (require, result, next) => {
  const id = parseInt(require.params.id);

  Pens.findAll({
      where: {
        id: id
      }
    })
    .then(pen => {
      result.status(200).json(pen);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};

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
      result.send(`Updated ${res}`);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};