const path = require("path");

const express = require("express");

const GlobalMeasuresCtrl = require("../ctrl/global");
const PensCtrl = require("../ctrl/pens");
const PenMeasuresCtrl = require("../ctrl/pen-measures");
const ForageCtrl = require("../ctrl/forage");
const PigsCtrl = require("../ctrl/pigs");
const ExamsCtrl = require("../ctrl/exams");

const router = express.Router();

router.get("/global", GlobalMeasuresCtrl.getGlobalMeasures);
router.get("/global-latest", GlobalMeasuresCtrl.getLatestGlobalMeasures);
router.post("/add-global", GlobalMeasuresCtrl.postAddGlobalMeasure);
router.put("/edit-global/:id", GlobalMeasuresCtrl.postEditGlobalMeasure);
router.delete("/delete-global/:id", GlobalMeasuresCtrl.deleteGlobalMeasure);

router.get("/pens", PensCtrl.getPens);
router.get("/pens-isolated", PensCtrl.postEditPen);

router.get("/pen-measures", PenMeasuresCtrl.getAllPenMeasures);
router.get("/pen-measures/:id", PenMeasuresCtrl.getPenMeasures);
router.post("/add-pen-measure", PenMeasuresCtrl.postAddPenMeasure);
router.put("/edit-pen-measure/:id", PenMeasuresCtrl.postEditPenMeasure);
router.delete("/delete-pen-measure/:id", PenMeasuresCtrl.deletePenMeasure);

router.get("/forage/:id", ForageCtrl.getForageData);
router.post("/add-forage", ForageCtrl.postAddForage);
router.put("/edit-forage/:id", ForageCtrl.postEditForage);
router.delete("/delete-forage/:id", ForageCtrl.deleteForage);

router.get("/pigs", PigsCtrl.getPigs);
router.get("/active-pigs/:id", PigsCtrl.getActivePigs);
router.get("/out-pigs/", PigsCtrl.getOutPigs);
router.post("/add-pig", PigsCtrl.postAddPig);
router.put("/edit-pig/:id", PigsCtrl.postEditActivePig);
router.put("/pig-sold/:id", PigsCtrl.postEditSoldPig);
router.put("/pig-dead/:id", PigsCtrl.postEditDeadPig);

router.get("/exam/:id", ExamsCtrl.getExam);
router.get("/exams-pig/:id", ExamsCtrl.getExamsForPig);
router.post("/add-exam", ExamsCtrl.postAddExam);
router.put("/edit-exam/:id", ExamsCtrl.postEditExam);
router.delete("/delete-exam/:id", ExamsCtrl.deleteExam);

module.exports = router;