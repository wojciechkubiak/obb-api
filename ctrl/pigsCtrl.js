const Pigs = require('../models/pigs');


/*
 * GET
 */

// TODO: All (where selling_price && death_date equals null)
exports.getPigs = (require, result, next) => {
    Pigs.findAll()
        .then(pigs => {
            result.status(200).json(pigs);
        })
        .catch(error => {
            console.log(error);
        })
}

// TODO: All (where (selling_price || death_date) != null)

// TODO: By pen ID (where selling_price && death_date equals null)


/*
 * POST
 */

// TODO: New 

/*
 * PUT
 */

// TODO: Edit ID for pig and "sons"

/*
 * DELETE
 */


// TODO: Delete (set selling_price != null)

// TODO: Delete (set death_date != null)

// TODO: Isolate (set isolated == true)

// TODO: Deisolate (set isolated == false)