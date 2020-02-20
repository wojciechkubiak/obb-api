const Pigs = require("../models/pigs");
const {
  Op
} = require("sequelize");


exports.getPigs = (require, result, next) => {
  Pigs.findAll()
    .then(pigs => {
      result.status(200).json(pigs);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getOutPigs = (require, result, next) => {
  Pigs.findAll({
      where: {
        [Op.or]: [{
            pigSellingCost: {
              [Op.ne]: null
            }
          },
          {
            pigDeathDate: {
              [Op.ne]: null
            }
          }
        ]
      }
    })
    .then(pigs => {
      result.status(200).json(pigs);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getActivePigs = (require, result, next) => {
  const id = parseInt(require.params.id);

  Pigs.findAll({
      where: {
        idPen: id,
        [Op.and]: [{
          pigSellingCost: null
        }, {
          pigDeathDate: null
        }]
      }
    })
    .then(pigs => {
      result.status(200).json(pigs);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postAddPig = (require, result, next) => {
  const penID = require.body.idPen;
  const id = require.body.id;
  const gender = require.body.pigGender;
  const shoppingDate = require.body.pigShoppingDate;
  const shoppingPrice = require.body.pigShoppingPrice;

  Pigs.create({
      idPen: penID,
      id: id,
      pigGender: gender,
      pigShoppingDate: shoppingDate,
      pigShoppingPrice: shoppingPrice
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postEditActivePig = (require, result, next) => {
  const id = require.params.id;

  const upPigPen = require.body.idPen;
  const upPigGender = require.body.pigGender;
  const upPigShoppingDate = require.body.pig_shoppingDate;
  const upPigShoppingPrice = require.body.pig_shoppingPrice;

  Pigs.update({
      idPen: upPigPen,
      pigGender: upPigGender,
      pigShoppingDate: upPigShoppingDate,
      pigShoppingPrice: upPigShoppingPrice
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

exports.postEditSoldPig = (require, result, next) => {
  const id = require.params.id;

  const upPigSaleDate = require.body.pigSaleDate;
  const upPigSellingCost = require.body.pigSellingCost;

  Pigs.update({
      pigSaleDate: upPigSaleDate,
      pigSellingCost: upPigSellingCost
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

exports.postEditDeadPig = (require, result, next) => {
  const id = require.params.id;

  const upPigDeathDate = require.body.pigDeathDate;

  Pigs.update({
      pigDeathDate: upPigDeathDate
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

exports.deletePigEntry = (require, result, next) => {
  const id = require.params.id;

  Pigs.destroy({
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
