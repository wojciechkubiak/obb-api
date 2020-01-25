const Pigs = require("../models/pigs");
const { Op } = require("sequelize");


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
      [Op.or]: [
        { pig_selling_cost: { [Op.ne]: null } },
        { pig_death_date: { [Op.ne]: null } }
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
      id_pen: id,
      [Op.and]: [{ pig_selling_cost: null }, { pig_death_date: null }]
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
  const penID = require.body.id_pen;
  const id = require.body.id;
  const gender = require.body.pig_gender;
  const shoppingDate = require.body.pig_shopping_date;
  const shoppingPrice = require.body.pig_shopping_price;

  Pigs.create({
    id_pen: penID,
    id: id,
    pig_gender: gender,
    pig_shopping_date: shoppingDate,
    pig_shopping_price: shoppingPrice
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

  const upPigPen = require.body.id_pen;
  const upPigGender = require.body.pig_gender;
  const upPigShoppingDate = require.body.pig_shopping_date;
  const upPigShoppingPrice = require.body.pig_shopping_price;

  Pigs.update(
    {
      id_pen: upPigPen,
      pig_gender: upPigGender,
      pig_shopping_date: upPigShoppingDate,
      pig_shopping_price: upPigShoppingPrice
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

exports.postEditSoldPig = (require, result, next) => {
  const id = require.params.id;

  const upPigSaleDate = require.body.pig_sale_date;
  const upPigSellingCost = require.body.pig_selling_cost;

  Pigs.update(
    {
      pig_sale_date: upPigSaleDate,
      pig_selling_cost: upPigSellingCost
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

exports.postEditDeadPig = (require, result, next) => {
  const id = require.params.id;

  const upPigDeathDate = require.body.pig_death_date;

  Pigs.update(
    {
      pig_death_date: upPigDeathDate
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
