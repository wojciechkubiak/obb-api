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
    }).then(out => {
        console.log(out);
    }).catch(error => {
        console.log(error)
    })
}

/*
 * PUT
 */

// TODO: Edit ID for pig and "sons"
// exports.postEditPigId = (require, result, next) => {
    
//     const id = require.params.id;
//     const gender = require.body.pig_gender;

//     Product.findById(id)
//         .then(pig => {
//             pig.pig_gender = gender;
//             return pig.save(); 
//         })
//         .then(result => {
//             console.log(`Update completed: ${result}`);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// TODO: Edit selling price, death date or isolated/deisolated for id