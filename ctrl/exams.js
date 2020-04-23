const Exam = require("../models/exams");

exports.getExamsForPig = (require, result, next) => {
  const id = require.params.id;

  Exam.findAll({
    where: {
      idPig: id
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
    limit: 1,
    order: [
      ["exDate", "DESC"]
    ],
    where: {
      idPig: id
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
  const pigID = require.body.idPig;
  const examDate = require.body.exDate;
  const examTime = require.body.exTime;
  const feces = require.body.feces;
  const tissue = require.body.tissue;
  const examResult = require.body.exResult;
  const medicine = require.body.medicine;
  const medicineQty = require.body.medicineQty;
  const medicineType = require.body.medicineType;
  const diarrhea = require.body.diarrhea;
  const weight = require.body.weight;
  const temperature = require.body.temperature;
  const lameness = require.body.lameness;
  const respiratorySystem = require.body.respiratorySys;
  const skinChanges = require.body.skinChanges;

  Exam.create({
      idPig: pigID,
      exDate: examDate,
      exTime: examTime,
      feces: feces,
      tissue: tissue,
      exResult: examResult,
      medicine: medicine,
      medicineQty: medicineQty,
      medicineType: medicineType,
      diarrhea: diarrhea,
      weight: weight,
      temperature: temperature,
      lameness: lameness,
      respiratorySys: respiratorySystem,
      skinChanges: skinChanges
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

  const upExamDate = require.body.exDate;
  const upExamTime = require.body.exTime;
  const upFeces = require.body.feces;
  const upTissue = require.body.tissue;
  const upExamResult = require.body.exResult;
  const upMedicine = require.body.medicine;
  const upMedicineQty = require.body.medicineQty;
  const upMedicineType = require.body.medicineType;
  const upDiarrhea = require.body.diarrhea;
  const upWeight = require.body.weight;
  const upTemperature = require.body.temperature;
  const upLameness = require.body.lameness;
  const upRespiratorySystem = require.body.respiratorySys;
  const upSkinChanges = require.body.skinChanges;

  Exam.update({
      exDate: upExamDate,
      exTime: upExamTime,
      feces: upFeces,
      tissue: upTissue,
      exResult: upExamResult,
      medicine: upMedicine,
      medicineQty: upMedicineQty,
      medicineType: upMedicineType,
      diarrhea: upDiarrhea,
      weight: upWeight,
      temperature: upTemperature,
      lameness: upLameness,
      respiratorySys: upRespiratorySystem,
      skinChanges: upSkinChanges
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

exports.postEditExamDates = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upExamDate = require.body.exDate;
  const upExamTime = require.body.exTime;

  Exam.update({
      exDate: upExamDate,
      exTime: upExamTime
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

exports.postEditExamFeces = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upFeces = require.body.feces;

  Exam.update({
      feces: upFeces
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

exports.postEditExamTissue = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upTissue = require.body.tissue;
  
  Exam.update({
      tissue: upTissue
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

exports.postEditExamResult = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upExamResult = require.body.exResult;

  Exam.update({
      exResult: upExamResult,
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

exports.postEditExamMedicine = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upMedicine = require.body.medicine;

  Exam.update({
      medicine: upMedicine
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

exports.postEditExamMedicineQty = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upMedicineQty = require.body.medicineQty;

  Exam.update({
      medicineQty: upMedicineQty,
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

exports.postEditExamMedicineType = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upMedicineType = require.body.medicineType;

  Exam.update({
      medicineType: upMedicineType,
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

exports.postEditExamDiarrhea = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upDiarrhea = require.body.diarrhea;

  Exam.update({
      diarrhea: upDiarrhea
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

exports.postEditExamWeight = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upWeight = require.body.weight;

  Exam.update({
      weight: upWeight,
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

exports.postEditExamTemperature = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upTemperature = require.body.temperature;

  Exam.update({
      temperature: upTemperature
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

exports.postEditExamLameness = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upLameness = require.body.lameness;

  Exam.update({
      lameness: upLameness,
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

exports.postEditExamRespiratorySys = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upRespiratorySystem = require.body.respiratorySys;

  Exam.update({
      respiratorySys: upRespiratorySystem,
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

exports.postEditExamSkinChanges = (require, result, next) => {
  const id = parseInt(require.params.id);

  const upSkinChanges = require.body.skinChanges;

  Exam.update({
      skinChanges: upSkinChanges
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
  const id = parseInt(require.params.id);

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