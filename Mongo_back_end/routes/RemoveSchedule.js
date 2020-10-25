var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var arrlist=[]


router.post('/',function(req,res) {

    console.log(req.body)


    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(req.body.dbname);

        var myquery="";
        var newvalues="";

        if(req.body.semester=="sem1") {
            myquery = {"sem1.code": req.body.code,"sem1.lecture":req.body.lecture};
            newvalues = {
                $set: {
                    "sem1.$.meeting_url": req.body.meetingurl,
                    "sem1.$.lecture": " ",
                    "sem1.$.time": req.body.time
                }
            };
        }
        else{
            myquery = {"sem2.code": req.body.code,"sem1.lecture":req.body.lecture};
            newvalues = {
                $set: {
                    "sem2.$.meeting_url": req.body.meetingurl,
                    "sem2.$.lecture": " ",
                    "sem2.$.time": req.body.time
                }
            };
        }

        console.log(newvalues)
        dbo.collection(req.body.year).updateOne(myquery, newvalues, function (err, results) {
            if (err) throw err;

            console.log(results.modifiedCount);
            db.close();res.send(toString(results.modifiedCount))
        });


    });

})

module.exports = router