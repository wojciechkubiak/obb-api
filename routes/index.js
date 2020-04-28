const path = require("path");
const jwt = require("jsonwebtoken");
import 'dotenv/config';

const express = require("express");

const UserCtrl = require("../ctrl/user");
const GlobalMeasuresCtrl = require("../ctrl/global");
const PensCtrl = require("../ctrl/pens");
const PenMeasuresCtrl = require("../ctrl/pen-measures");
const ForageCtrl = require("../ctrl/forage");
const PigsCtrl = require("../ctrl/pigs");
const ExamsCtrl = require("../ctrl/exams");
const WaterCtrl = require("../ctrl/water");

const router = express.Router();

const auth = (require, result, next) => {
    const header = require.headers["authorization"];

    if(!header) {
        return result.status(401).send({Acces: `Denied`});
    }

    try {
        const data = jwt.verify(header, process.env.LOCAL_KEY || process.env.HR_KEY);
        require.user = data;
        next();
    } catch(e) {
        result.status(400).send({data: `${header}`});
    }
}

router.post('/register', UserCtrl.registerUser);
router.post('/login', UserCtrl.loginUser);

router.get("/global", GlobalMeasuresCtrl.getGlobalMeasures);
router.get("/global-latest", GlobalMeasuresCtrl.getLatestGlobalMeasures);
router.post("/add-global", auth, GlobalMeasuresCtrl.postAddGlobalMeasure);
router.put("/edit-global/:id", auth, GlobalMeasuresCtrl.postEditGlobalMeasure);
router.delete("/delete-global/:id", auth, GlobalMeasuresCtrl.deleteGlobalMeasure);

router.get("/pens", PensCtrl.getPens);
router.get("/pens/:id", PensCtrl.getSinglePen);
router.get("/pens-isolated", PensCtrl.postEditPen);

router.get("/pen-measures", PenMeasuresCtrl.getAllPenMeasures);
router.get("/pen-measures/:id", PenMeasuresCtrl.getPenMeasures);
router.get("/pen-measures-last/:id", PenMeasuresCtrl.getPenMeasuresLast);
router.post("/add-pen-measure", auth, PenMeasuresCtrl.postAddPenMeasure);
router.put("/edit-pen-measure/:id", auth, PenMeasuresCtrl.postEditPenMeasure);
router.delete("/delete-pen-measure/:id", auth, PenMeasuresCtrl.deletePenMeasure);

router.get("/forage/:id", ForageCtrl.getForageData);
router.get("/forage-last/:id", ForageCtrl.getForageDataLast);
router.post("/add-forage", auth, ForageCtrl.postAddForage);
router.put("/edit-forage/:id", auth, ForageCtrl.postEditForage);
router.delete("/delete-forage/:id", auth, ForageCtrl.deleteForage);

router.get("/pigs", PigsCtrl.getPigs);
router.get("/active-pigs/:id", PigsCtrl.getActivePigs);

//TODO: Add into README.md
router.get("/dead-pigs/", PigsCtrl.getDeadPigs);
router.get("/dead-pigs/:id", PigsCtrl.getDeadPigsByDate);
router.get("/dead-pigs-limited/", PigsCtrl.getDeadPigsLimited);
router.get("/sold-pigs/:id", PigsCtrl.getSoldPigsByDate);
router.get("/sold-pigs/", PigsCtrl.getSoldPigs);
router.get("/sold-pigs-limited/", PigsCtrl.getSoldPigsLimited);
router.put("/pig-undone-sold/:id", auth, PigsCtrl.postUndoneEditSoldPig);
router.put("/pig-undone-dead/:id", auth, PigsCtrl.postUndoneEditDeadPig);

router.post("/add-pig", auth, PigsCtrl.postAddPig);
router.put("/edit-pig/:id", auth, PigsCtrl.postEditActivePig);
router.put("/pig-sold/:id", auth, PigsCtrl.postEditSoldPig);
router.put("/pig-dead/:id", auth, PigsCtrl.postEditDeadPig);
router.delete("/delete-pig/:id", auth, PigsCtrl.deletePigEntry);

router.get("/exams/:id", ExamsCtrl.getExamsForPig);
router.get("/exams-latest/:id", ExamsCtrl.getExam);
router.post("/add-exam", auth, ExamsCtrl.postAddExam);
router.put("/edit-exam/:id", auth, ExamsCtrl.postEditExam);
router.delete("/delete-exam/:id", auth, ExamsCtrl.deleteExam);

router.put("/exams-edit-dates/:id", auth, ExamsCtrl.postEditExamDates);
router.put("/exams-edit-feces/:id", auth, ExamsCtrl.postEditExamFeces);
router.put("/exams-edit-tissue/:id", auth, ExamsCtrl.postEditExamTissue);
router.put("/exams-edit-result/:id", auth, ExamsCtrl.postEditExamResult);
router.put("/exams-edit-medicine/:id", auth, ExamsCtrl.postEditExamMedicine);
router.put("/exams-edit-medicineqty/:id", auth, ExamsCtrl.postEditExamMedicineQty);
router.put("/exams-edit-medicinetype/:id", auth, ExamsCtrl.postEditExamMedicineType);
router.put("/exams-edit-diarrhea/:id", auth, ExamsCtrl.postEditExamDiarrhea);
router.put("/exams-edit-weight/:id", auth, ExamsCtrl.postEditExamWeight);
router.put("/exams-edit-temperature/:id", auth, ExamsCtrl.postEditExamTemperature);
router.put("/exams-edit-lameness/:id", auth, ExamsCtrl.postEditExamLameness);
router.put("/exams-edit-respiratorysys/:id", auth, ExamsCtrl.postEditExamRespiratorySys);
router.put("/exams-edit-skinchanges/:id", auth, ExamsCtrl.postEditExamSkinChanges);

router.get("/water-feach-pen/:id", WaterCtrl.getLastWaterData);
router.get("/water-pen/:id", WaterCtrl.getAllWaterData);
// TODO: router.get("/water-feach-pen-last/:id", WaterCtrl.getLastWaterDataForAllPens);
router.post("/water-add", auth, WaterCtrl.postWaterEntry);
router.put("/water-edit/:id", auth, WaterCtrl.postEditWaterEntry);
router.delete("/water-delete/:id", auth, WaterCtrl.deleteWaterEntry);

module.exports = router;