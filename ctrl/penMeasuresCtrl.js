const PenMeasures = require('../models/penMeasures');

/*
 * GET
 */

// TODO: All measures for each pen
exports.getPenMeasures = (require, result, next) => {
    PenMeasures.findAll()
        .then(measures => {
            result.status(200).json(measures);
        })
        .catch(error => {
            console.log(error);
        })
}


/*
 * POST
 */

// TODO: New measure (for single pen)

/*
 * PUT
 */

// TODO: Edit measure based on ID

/*
 * DELETE
 */