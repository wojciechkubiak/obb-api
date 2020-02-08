const Forage = require("../models/forage");

exports.getForageData = (require, result, next) => {
  const id = parseInt(require.params.id);

  Forage.findAll({
      where: {
        idPen: id
      }
    })
    .then(forage => {
      result.status(200).json(forage);
    })
    .catch(error => {
      console.log(error);
    });
};

//TODO Get all/latest forage for every ID (ask if there is more than one)

exports.postAddForage = (require, result, next) => {
  const penID = require.body.idPen;
  const forageAbout = require.body.fgAbout;
  const forageQty = require.body.fgQty;
  const foragePrice = require.body.fgPrice;
  const creationDate = require.body.creationDate;
  const producer = require.body.producer;
  const expiration = require.body.expiration;

  Forage.create({
      idPen: penID,
      fgAbout: forageAbout,
      fgQty: forageQty,
      fgPrice: foragePrice,
      creationDate: creationDate,
      producer: producer,
      expiration: expiration
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postEditForage = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upPenID = require.body.idPen;
  const upForageAbout = require.body.fgAbout;
  const upForageQty = require.body.fgQty;
  const upForagePrice = require.body.fgPrice;
  const upCreationDate = require.body.creationDate;
  const upProducer = require.body.producer;
  const upExpiration = require.body.expiration;

  Forage.update({
      idPen: upPenID,
      fgAbout: upForageAbout,
      fgQty: upForageQty,
      fgPrice: upForagePrice,
      creationDate: upCreationDate,
      producer: upProducer,
      expiration: upExpiration
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

exports.deleteForage = (require, result, next) => {
  const id = parseInt(require.params.id);

  Forage.destroy({
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