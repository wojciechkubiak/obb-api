import 'dotenv/config';

const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: process.env.WELCOME_MESSAGE
  });
});

module.exports = router;
