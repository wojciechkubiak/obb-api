const Water = require("../models/water");
const {
  Op
} = require("sequelize");

// all
// last for every pen /:id
// all from every pen /:id
// last for all pens

// add

// edit /:id

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