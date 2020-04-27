const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const sequelize = require('./utility/connection');
const cors = require('cors');
const GlobalMeasures = require('./models/global');
const Pens = require('./models/pens');
const PenMeasures = require('./models/pen-measures');
const Forage = require('./models/forage');
const Pigs = require('./models/pigs');
const Exams = require('./models/exams');
const Water = require('./models/water');
const User = require('./models/user');
const indexRouter = require('./routes/index');

const app = express();

Pens.hasMany(Pigs);
Pens.hasMany(PenMeasures);
Pens.hasMany(Forage);
Pens.hasMany(Water);
Pigs.hasMany(Exams);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);

app.use((req, res, next) => {
  next(httpErrors(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json(err);
});

sequelize.sync()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    result.status(400).json({error: error})
  });

module.exports = app;