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

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'https://localhost:3001')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

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
    console.log(error);
  });

module.exports = app;