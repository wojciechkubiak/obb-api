const Pigs = require("../models/pigs");
const { Op } = require("sequelize");

exports.getPigs = (require, result, next) => {
  Pigs.findAll()
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.getDeadPigs = (require, result, next) => {
  Pigs.findAll(
    {
    order: [["pigDeathDate", "DESC"]],
    attributes: [
      "idPen",
      "id",
      "pigGender",
      "pigShoppingDate",
      "pigShoppingPrice",
      "pigDeathDate"
    ],
    where: {
      pigDeathDate: {
        [Op.ne]: null,
      },
    },
  })
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.getDeadPigsLimited = (require, result, next) => {
  Pigs.findAll({
    limit: 25,
    order: [["pigDeathDate", "DESC"]],
    where: {
      pigDeathDate: {
        [Op.ne]: null,
      },
    },
  })
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.getSoldPigs = (require, result, next) => {
  Pigs.findAll({
    order: [["pigSaleDate", "DESC"]],
    where: {
      pigSaleDate: {
        [Op.ne]: null,
      },
    },
  })
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.getSoldPigsLimited = (require, result, next) => {
  Pigs.findAll({
    limit: 25,
    attributes: [
      "idPen",
      "id",
      "pigGender",
      "pigShoppingDate",
      "pigShoppingPrice",
      "pigSaleDate",
      "pigSellingCost"
    ],
    order: [["pigSaleDate", "DESC"]],
    where: {
      pigSaleDate: {
        [Op.ne]: null,
      },
    },
  })
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

/*
exports.getSoldPigsByDate = (require, result, next) => {
  const id = require.params.id;
  const year = parseInt(id.slice(0, 4));
  const month = parseInt(id.slice(4, 6));

  console.log(year, month);

    sequelize.query(
        'SELECT * FROM pigs WHERE "pigSaleDate" IS NOT NULL AND date_part(\'month\', "pigSaleDate") = :month AND date_part(\'year\', "pigSaleDate") = :year',
        {
          replacements: { month: month, year: year},
          type: QueryTypes.SELECT
        }
    )
    .then(pigs => {
      result.status(200).json(pigs);
    })
    .catch(error => {
      result.status(400).json({error: error})
    });
};
*/
//TODO: Sold/Dead based on date
exports.getSoldPigsByDate = (require, result, next) => {
  const id = require.params.id;
  const year = id.slice(0, 4);
  const month = id.slice(4, 6);
  const day = id.slice(6,8);
  const _year = id.slice(8, 12);
  const _month = id.slice(12, 14);
  const _day = id.slice(14, 16);
  
  const start= `${year}-${month}-${day}`;
  const end = `${_year}-${_month}-${_day}`;

  Pigs.findAll({
    where: {
      pigSaleDate: {
        [Op.between] : [start, end]
      }
    },
    order: [["pigSaleDate", "DESC"]],
    logging: console.log,
    raw: true
  })
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.getDeadPigsByDate = (require, result, next) => {
  const id = require.params.id;
  const year = id.slice(0, 4);
  const month = id.slice(4, 6);
  const day = id.slice(6,8);
  const _year = id.slice(8, 12);
  const _month = id.slice(12, 14);
  const _day = id.slice(14, 16);
  
  const start= `${year}-${month}-${day}`;
  const end = `${_year}-${_month}-${_day}`;

  Pigs.findAll({
    where: {
      pigDeathDate: {
        [Op.between] : [start, end]
      }
    },
    order: [["pigDeathDate", "DESC"]],
    logging: console.log,
    raw: true
  })
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.getActivePigs = (require, result, next) => {
  const id = parseInt(require.params.id);

  Pigs.findAll({
    where: {
      idPen: id,
      [Op.and]: [
        {
          pigSellingCost: null,
        },
        {
          pigDeathDate: null,
        },
      ],
    },
  })
    .then((pigs) => {
      result.status(200).json(pigs);
    })
    .catch((error) => {
      result.status(400).json({error: error})
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
    pigShoppingPrice: shoppingPrice,
  })
    .then((out) => {
      console.log(out);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.postEditActivePig = (require, result, next) => {
  const id = require.params.id;

  const upPigPen = require.body.idPen;
  const upPigGender = require.body.pigGender;
  const upPigShoppingDate = require.body.pigShoppingDate;
  const upPigShoppingPrice = require.body.pigShoppingPrice;

  Pigs.update(
    {
      idPen: upPigPen,
      pigGender: upPigGender,
      pigShoppingDate: upPigShoppingDate,
      pigShoppingPrice: upPigShoppingPrice,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((res) => {
      result.send(`Updated ${res}`);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.postEditSoldPig = (require, result, next) => {
  const id = require.params.id;

  const upPigSaleDate = require.body.pigSaleDate;
  const upPigSellingCost = require.body.pigSellingCost;

  Pigs.update(
    {
      pigSaleDate: upPigSaleDate,
      pigSellingCost: upPigSellingCost,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((res) => {
      result.send(`Updated ${res}`);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.postUndoneEditSoldPig = (require, result, next) => {
  const id = require.params.id;

  Pigs.update(
    {
      pigSaleDate: null,
      pigSellingCost: null,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((res) => {
      result.send(`Updated ${res}`);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.postEditDeadPig = (require, result, next) => {
  const id = require.params.id;

  const upPigDeathDate = require.body.pigDeathDate;

  Pigs.update(
    {
      pigDeathDate: upPigDeathDate,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((res) => {
      result.send(`Updated ${res}`);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.postUndoneEditDeadPig = (require, result, next) => {
  const id = require.params.id;

  Pigs.update(
    {
      pigDeathDate: null,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((res) => {
      result.send(`Updated ${res}`);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};

exports.deletePigEntry = (require, result, next) => {
  const id = require.params.id;

  Pigs.destroy({
    where: {
      id: id,
    },
  })
    .then((res) => {
      result.send(`Updated ${res}`);
    })
    .catch((error) => {
      result.status(400).json({error: error})
    });
};
