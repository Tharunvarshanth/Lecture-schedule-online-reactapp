/*
var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
const app = express();

var logger = require('morgan');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use(express.json());


app.use(
    express.urlencoded({
      extended: true
    })
)


var indexRouter = require('./app/routes/index');
var gett = require('./app/routes/GetTimeTable')
var getcourecode = require('./app/routes/GetCourseCode')
var updateschedule = require('./app/routes/UpdateSchedule')
var removeschedule = require('./app/routes/RemoveSchedule')
var getyearlist = require('./app/routes/getyearlist')


app.use('/', indexRouter);
app.use('/gettimetable',gett);
app.use('/getcoursecode',getcourecode);
app.use('/updateschedule',updateschedule);
app.use('/removeschedule',removeschedule);
app.use('/academicyear',getyearlist);


module.exports = app;
*/