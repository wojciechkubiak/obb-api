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
router.get('/global', GlobalMeasuresCtrl.getGlobalMeasures)

//Pens
router.get('/pens', PensCtrl.getPens);

//PenMeasures
router.get('/measures', PenMeasuresCtrl.getPenMeasures )

//Forage
router.get('/forage', ForageCtrl.getForageData)

//Pigs
router.get('/pigs', PigsCtrl.getPigs);
router.get('/active-pigs/:id', PigsCtrl.getActivePigs);
router.get('/out-pigs/:id', PigsCtrl.getOutPigs);
router.post('/add-pig', PigsCtrl.postAddPig);
//router.post('/edit-pig/:id', PigsCtrl.postEditPigId);
//Exams
router.get('/exams', ExamsCtrl.getExam)


module.exports = router;