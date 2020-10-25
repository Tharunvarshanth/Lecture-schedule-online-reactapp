var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.get('/',function(req,res){
        console.log(req.query.dep)

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(req.query.dep);

       var arrlist=[]
        dbo.collection("firstyear").find({}).toArray(function(err, result) {
            if (err) throw err;
                 for(x in result[0].sem1){
                     tem =result[0].sem1[x]
                     tem.year="firstyear"
                     tem.sem="sem1"
                     arrlist.push(tem)
                 }
                  for(x in result[1].sem2){
                      tem =result[1].sem2[x]
                      tem.year="firstyear"
                      tem.sem="sem2"
                      arrlist.push(tem)
                  }
        });
        dbo.collection("secondyear").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(x in result[0].sem1){
                tem =result[1].sem2[x]
                tem.year="secondyear"
                tem.sem="sem1"
                arrlist.push(tem)
            }
            for(x in result[1].sem2){
                tem =result[1].sem2[x]
                tem.year="secondyear"
                tem.sem="sem2"
                arrlist.push(tem)
            }
        });
        dbo.collection("thirdyear").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(x in result[0].sem1){
                tem =result[0].sem1[x]
                tem.year="thirdyear"
                tem.sem="sem1"
                arrlist.push(tem)
            }
            for(x in result[1].sem2){
                tem =result[1].sem2[x]
                tem.year="thirdyear"
                tem.sem="sem2"
                arrlist.push(tem)
            }
        });
        dbo.collection("fourthyear").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(x in result[0].sem1){
                tem =result[0].sem1[x]
                tem.year="fourthyear"
                tem.sem="sem1"
                arrlist.push(tem)
            }
            for(x in result[1].sem2){
                tem =result[1].sem2[x]
                tem.year="fourthyear"
                tem.sem="sem2"
                arrlist.push(tem)
            }

            db.close();
            res.send(arrlist);
        });

    });



})









module.exports =router