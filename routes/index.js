import 'dotenv/config';
const pool = require('../utility/connection')
const { Router } = require('express');

const router = Router();



/* GET index page. */
router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM pigs',
  (error, results) => {
      if(error) {throw error}
      res.status(200).json(results.rows)
  })
})



module.exports = router;
