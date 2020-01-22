const GlobalMeasures = require('../models/global');

/*
 * GET
 */

// All measures
exports.getGlobalMeasures = (require, result, next) => {
    GlobalMeasures.findAll()
        .then(measures => {
            result.status(200).json(measures);
        })
        .catch(error => {
            console.log(error);
        })
}


// TODO: Latest

/*
 * POST
 */

// TODO: New global measure

/*
 * PUT
 */

// TODO: Edit measure based on measure_id

/*
 * DELETE
 */

// TODO: Delete latest