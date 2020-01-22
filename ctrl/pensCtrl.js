const Pens = require('../models/pens');


/*
 * GET
 */

// All pens
exports.getPens = (require, result, next) => {
    Pens.findAll()
        .then(pens => {
            result.status(200).json(pens);
        })
        .catch(error => {
            console.log(error);
        })
}

/*
 * PUT
 */

// TODO: Set to isolated

// TODO: Unset isolation