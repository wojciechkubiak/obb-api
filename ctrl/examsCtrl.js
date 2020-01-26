const Exam = require("../models/exams");

exports.getExamsForPig = (require, result, next) => {
  const id = require.params.id;

  Exam.findAll({
      where: {
        id_pig: id
      }
    })
    .then(exams => {
      result.status(200).json(exams);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getExam = (require, result, next) => {
  const id = require.params.id;

  Exam.findAll({
      where: {
        id: id
      }
    })
    .then(exams => {
      result.status(200).json(exams);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postAddExam = (require, result, next) => {
  const pigID = require.body.id_pig;
  const examDate = require.body.ex_date;
  const examTime = require.body.ex_time;
  const feces = require.body.feces;
  const tissue = require.body.tissue;
  const examResult = require.body.ex_result;
  const medicine = require.body.medicine;
  const medicineQty = require.body.medicine_qty;
  const medicineType = require.body.medicine_type;
  const diarrhea = require.body.diarrhea;
  const weight = require.body.weight;
  const temperature = require.body.temperature;
  const lameness = require.body.lameness;
  const respiratorySystem = require.body.respiratory_sys;
  const skinChanges = require.body.skin_changes;

  Exam.create({
      id_pig: pigID,
      ex_date: examDate,
      ex_time: examTime,
      feces: feces,
      tissue: tissue,
      ex_result: examResult,
      medicine: medicine,
      medicine_qty: medicineQty,
      medicine_type: medicineType,
      diarrhea: diarrhea,
      weight: weight,
      temperature: temperature,
      lameness: lameness,
      respiratory_sys: respiratorySystem,
      skin_changes: skinChanges
    })
    .then(out => {
      console.log(out);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.postEditExam = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upPigID = require.body.id_pig;
  const upExamDate = require.body.ex_date;
  const upExamTime = require.body.ex_time;
  const upFeces = require.body.feces;
  const upTissue = require.body.tissue;
  const upExamResult = require.body.ex_result;
  const upMedicine = require.body.medicine;
  const upMedicineQty = require.body.medicine_qty;
  const upMedicineType = require.body.medicine_type;
  const upDiarrhea = require.body.diarrhea;
  const upWeight = require.body.weight;
  const upTemperature = require.body.temperature;
  const upLameness = require.body.lameness;
  const upRespiratorySystem = require.body.respiratory_sys;
  const upSkinChanges = require.body.skin_changes;

  Exam.update({
      id_pig: upPigID,
      ex_date: upExamDate,
      ex_time: upExamTime,
      feces: upFeces,
      tissue: upTissue,
      ex_result: upExamResult,
      medicine: upMedicine,
      medicine_qty: upMedicineQty,
      medicine_type: upMedicineType,
      diarrhea: upDiarrhea,
      weight: upWeight,
      temperature: upTemperature,
      lameness: upLameness,
      respiratory_sys: upRespiratorySystem,
      skin_changes: upSkinChanges
    }, {
      where: {
        id: id
      }
    })
    .then(res => {
      console.log("Updated");
    })
    .catch(error => {
      console.log(error);
    });
};

exports.deleteExam = (require, result, next) => {
  const id = require.params.id;

  Exam.destroy({
      where: {
        id: id
      }
    })
    .then(res => {
      console.log("Updated");
    })
    .catch(error => {
      console.log(error);
    });
};