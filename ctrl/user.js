import User from "./../models/user";
import 'dotenv/config';
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.registerUser = (require, result, next) => {
    const data = {
        username: require.body.username,
        password: require.body.password,
    }

    User.findOne({
        where: {
            username: require.body.username
        }
    })
    .then(() => {
        bcrypt.hash(require.body.password, 10, (error, hash) => {
            data.password = hash;
            User.create(data)
            .then(user => {
                result.json({status: `${user.username} - success`})
            })
            .catch(error => {
                result.send(`${error} - failed`)
            })
        })
    })
    .catch(error => {
        result.send(error);
    })
}

exports.loginUser = (require, result, next) => {
    User.findOne({
        where: {
            username: require.body.username
        }
    })   
    .then(user => {
        if(user) {
            console.log('Im here')
            if(bcrypt.compareSync(require.body.password, user.password)) {
                console.log('Im here 2')
                let token = jwt.sign(user.dataValues, process.env.LOCAL_KEY || process.env.HR_NAME, {
                    expiresIn: 1440
                })
                result.send(token);
            } else {
                result.status(400).json({error: "Wrong password"})
            }
        } else {
            result.status(400).json({error: "Login not found"})
        }
    })
    .catch(error => {
        result.status(400).json({error: error});
    })
}