const path = require('path');

const express = require('express');

//Place for controllers and their import
const GlobalMeasuresCtrl = require('../ctrl/globalCtrl');
const PensCtrl = require('../ctrl/pensCtrl');
const PenMeasuresCtrl = require('../ctrl/penMeasuresCtrl');
const ForageCtrl = require('../ctrl/forageCtrl');
const PigsCtrl = require('../ctrl/pigsCtrl');
const ExamsCtrl = require('../ctrl/examsCtrl');

const router = express.Router();

//GlobalMeasures

//Pens
router.get('/pens', PensCtrl.getPens);

//PenMeasures

//Forage

//Pigs

//Exams



module.exports = router;