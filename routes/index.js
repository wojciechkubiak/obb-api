const path = require('path');

const express = require('express');

//Place for controllers and their import
const PensCtrl = require('../ctrl/pensCtrl');

const router = express.Router();

//GlobalMeasures

//Pens
router.get('/pens', PensCtrl.getPens);

//PenMeasures

//Forage

//Pigs

//Exams



module.exports = router;