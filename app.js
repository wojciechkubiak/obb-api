const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const sequelize = require('./utility/connection');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

const GlobalMeasures = require('./models/global');
const Pens = require('./models/pens');
const PenMeasures = require('./models/penMeasures');
const Forage = require('./models/forage');
const Pigs = require('./models/pigs');
const Exams = require('./models/exams');

Pens.hasMany(Pigs);
Pens.hasMany(PenMeasures);
Pens.hasMany(Forage);
Pigs.hasMany(Exams);

app.use(indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

sequelize.sync()
  .then(result => {
  console.log(result);
  //app.listen(3001);
  })
  .catch(error => {
  console.log(error);
  });

module.exports = app;
