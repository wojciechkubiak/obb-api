const path = require("path");

const express = require("express");

//Place for controllers and their import
const GlobalMeasuresCtrl = require("../ctrl/globalCtrl");
const PensCtrl = require("../ctrl/pensCtrl");
const PenMeasuresCtrl = require("../ctrl/penMeasuresCtrl");
const ForageCtrl = require("../ctrl/forageCtrl");
const PigsCtrl = require("../ctrl/pigsCtrl");
const ExamsCtrl = require("../ctrl/examsCtrl");

const router = express.Router();

router.get("/global", GlobalMeasuresCtrl.getGlobalMeasures);
router.get("/global-latest", GlobalMeasuresCtrl.getLatestGlobalMeasures);
router.post("/add-global", GlobalMeasuresCtrl.postAddGlobalMeasure);
router.put("/edit-global/:id", GlobalMeasuresCtrl.postEditGlobalMeasure);
router.delete("/delete-global/:id", GlobalMeasuresCtrl.deleteGlobalMeasure);

//Pens
router.get("/pens", PensCtrl.getPens);

//PenMeasures
router.get("/measures", PenMeasuresCtrl.getPenMeasures);

//Forage
router.get("/forage", ForageCtrl.getForageData);

router.get("/pigs", PigsCtrl.getPigs);
router.get("/active-pigs/:id", PigsCtrl.getActivePigs);
router.get("/out-pigs/", PigsCtrl.getOutPigs);
router.post("/add-pig", PigsCtrl.postAddPig);
router.put("/edit-pig/:id", PigsCtrl.postEditActivePig);
router.put("/pig-sold/:id", PigsCtrl.postEditSoldPig);
router.put("/pig-dead/:id", PigsCtrl.postEditDeadPig);

//Exams
router.get("/exams", ExamsCtrl.getExam);

module.exports = router;
