const Forage = require('../models/forage');

/*
 * GET
 */

// TODO: All forage data based on ID
exports.getForageData = (require, result, next) => {
    Forage.findAll()
        .then(data => {
            result.status(200).json(data);
        })
        .catch(error => {
            console.log(error);
        })
}


// TODO: Latest based on ID

/*
 * POST
 */

// TODO: New forage data for forage ID

/*
 * PUT
 */

// TODO: Edit forage data based on data_id

/*
 * DELETE
 */

// TODO: Delete latest