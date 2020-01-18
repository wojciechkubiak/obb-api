import 'dotenv/config';

const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.LOCAL_USER || process.env.HR_USER,
    host: process.env.LOCAL_HOST || process.env.HR_HOST,
    database: process.env.LOCAL_NAME || process.env.HR_NAME,
    password: process.env.LOCAL_PASS || process.env.HR_PASS,
    port: process.env.LOCAL_PORT || process.env.HR_PORT
})

module.exports = pool