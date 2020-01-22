const Exam = require('../models/exams');

/*
 * GET
 */

// TODO: All exams for one object_id
exports.getExam = (require, result, next) => {
    Exam.findAll()
        .then(exam => {
            result.status(200).json(exam);
        })
        .catch(error => {
            console.log(error);
        })
}

/*
 * POST
 */

// TODO: New exam for one object_id

/*
 * PUT
 */

// TODO: Edit exam based on exam_id

/*
 * DELETE
 */

// TODO: Delete latest exam