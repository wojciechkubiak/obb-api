const path = require("path");

const express = require("express");

const GlobalMeasuresCtrl = require("../ctrl/global");
const PensCtrl = require("../ctrl/pens");
const PenMeasuresCtrl = require("../ctrl/pen-measures");
const ForageCtrl = require("../ctrl/forage");
const PigsCtrl = require("../ctrl/pigs");
const ExamsCtrl = require("../ctrl/exams");
const WaterCtrl = require("../ctrl/water");

const router = express.Router();

router.get("/global", GlobalMeasuresCtrl.getGlobalMeasures);
router.get("/global-latest", GlobalMeasuresCtrl.getLatestGlobalMeasures);
router.post("/add-global", GlobalMeasuresCtrl.postAddGlobalMeasure);
router.put("/edit-global/:id", GlobalMeasuresCtrl.postEditGlobalMeasure);
router.delete("/delete-global/:id", GlobalMeasuresCtrl.deleteGlobalMeasure);

router.get("/pens", PensCtrl.getPens);
router.get("/pens/:id", PensCtrl.getSinglePen);
router.get("/pens-isolated", PensCtrl.postEditPen);

router.get("/pen-measures", PenMeasuresCtrl.getAllPenMeasures);
router.get("/pen-measures/:id", PenMeasuresCtrl.getPenMeasures);
router.get("/pen-measures-last/:id", PenMeasuresCtrl.getPenMeasuresLast);
router.post("/add-pen-measure", PenMeasuresCtrl.postAddPenMeasure);
router.put("/edit-pen-measure/:id", PenMeasuresCtrl.postEditPenMeasure);
router.delete("/delete-pen-measure/:id", PenMeasuresCtrl.deletePenMeasure);

router.get("/forage/:id", ForageCtrl.getForageData);
router.get("/forage-last/:id", ForageCtrl.getForageDataLast);
router.post("/add-forage", ForageCtrl.postAddForage);
router.put("/edit-forage/:id", ForageCtrl.postEditForage);
router.delete("/delete-forage/:id", ForageCtrl.deleteForage);

router.get("/pigs", PigsCtrl.getPigs);
router.get("/active-pigs/:id", PigsCtrl.getActivePigs);

//TODO: Add into README.md
router.get("/dead-pigs/", PigsCtrl.getDeadPigs);
router.get("/dead-pigs/:id", PigsCtrl.getDeadPigsByDate);
router.get("/dead-pigs-limited/", PigsCtrl.getDeadPigsLimited);
router.get("/sold-pigs/:id", PigsCtrl.getSoldPigsByDate);
router.get("/sold-pigs/", PigsCtrl.getSoldPigs);
router.get("/sold-pigs-limited/", PigsCtrl.getSoldPigsLimited);
router.put("/pig-undone-sold/:id", PigsCtrl.postUndoneEditSoldPig);
router.put("/pig-undone-dead/:id", PigsCtrl.postUndoneEditDeadPig);

router.post("/add-pig", PigsCtrl.postAddPig);
router.put("/edit-pig/:id", PigsCtrl.postEditActivePig);
router.put("/pig-sold/:id", PigsCtrl.postEditSoldPig);
router.put("/pig-dead/:id", PigsCtrl.postEditDeadPig);
router.delete("/delete-pig/:id", PigsCtrl.deletePigEntry);

router.get("/exams/:id", ExamsCtrl.getExamsForPig);
router.get("/exams-latest/:id", ExamsCtrl.getExam);
router.post("/add-exam", ExamsCtrl.postAddExam);
router.put("/edit-exam/:id", ExamsCtrl.postEditExam);
router.delete("/delete-exam/:id", ExamsCtrl.deleteExam);

router.put("/exams-edit-dates/:id", ExamsCtrl.postEditExamDates);
router.put("/exams-edit-feces/:id", ExamsCtrl.postEditExamFeces);
router.put("/exams-edit-tissue/:id", ExamsCtrl.postEditExamTissue);
router.put("/exams-edit-result/:id", ExamsCtrl.postEditExamResult);
router.put("/exams-edit-medicine/:id", ExamsCtrl.postEditExamMedicine);
router.put("/exams-edit-medicineqty/:id", ExamsCtrl.postEditExamMedicineQty);
router.put("/exams-edit-medicinetype/:id", ExamsCtrl.postEditExamMedicineType);
router.put("/exams-edit-diarrhea/:id", ExamsCtrl.postEditExamDiarrhea);
router.put("/exams-edit-weight/:id", ExamsCtrl.postEditExamWeight);
router.put("/exams-edit-temperature/:id", ExamsCtrl.postEditExamTemperature);
router.put("/exams-edit-lameness/:id", ExamsCtrl.postEditExamLameness);
router.put("/exams-edit-respiratorysys/:id", ExamsCtrl.postEditExamRespiratorySys);
router.put("/exams-edit-skinchanges/:id", ExamsCtrl.postEditExamSkinChanges);

router.get("/water-feach-pen/:id", WaterCtrl.getLastWaterData);
router.get("/water-pen/:id", WaterCtrl.getAllWaterData);
// TODO: router.get("/water-feach-pen-last/:id", WaterCtrl.getLastWaterDataForAllPens);
router.post("/water-add", WaterCtrl.postWaterEntry);
router.put("/water-edit/:id", WaterCtrl.postEditWaterEntry);
router.delete("/water-delete/:id", WaterCtrl.deleteWaterEntry);

module.exports = router;