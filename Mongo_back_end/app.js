var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var app = express();

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


var indexRouter = require('./routes/index');
var gett = require('./routes/GetTimeTable')
var getcourecode = require('./routes/GetCourseCode')
var updateschedule = require('./routes/UpdateSchedule')
var removeschedule = require('./routes/RemoveSchedule')


app.use('/', indexRouter);
app.use('/gettimetable',gett);
app.use('/getcoursecode',getcourecode);
app.use('/updateschedule',updateschedule);
app.use('/removeschedule',removeschedule);






module.exports = app;
