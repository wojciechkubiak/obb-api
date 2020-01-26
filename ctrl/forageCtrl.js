const Forage = require("../models/forage");

exports.getForageData = (require, result, next) => {
  const id = parseInt(require.params.id);

  Forage.findAll({
      where: {
        id_pen: id
      }
    })
    .then(forage => {
      result.status(200).json(forage);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postAddForage = (require, result, next) => {
  const penID = require.body.id_pen;
  const forageAbout = require.body.fg_about;
  const forageQty = require.body.fg_qty;
  const foragePrice = require.body.fg_price;
  const creationDate = require.body.creation_date;
  const producer = require.body.producer;
  const expiration = require.body.expiration;

  Forage.create({
      id_pen: penID,
      fg_about: forageAbout,
      fg_qty: forageQty,
      fg_price: foragePrice,
      creation_date: creationDate,
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

  const upPenID = require.body.id_pen;
  const upForageAbout = require.body.fg_about;
  const upForageQty = require.body.fg_qty;
  const upForagePrice = require.body.fg_price;
  const upCreationDate = require.body.creation_date;
  const upProducer = require.body.producer;
  const upExpiration = require.body.expiration;

  Forage.update({
      id_pen: upPenID,
      fg_about: upForageAbout,
      fg_qty: upForageQty,
      fg_price: upForagePrice,
      creation_date: upCreationDate,
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
  const id = require.params.id;

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