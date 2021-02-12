var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.post('/',function(req,res) {
    console.log(req.body.year)

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(req.body.dbname);


        dbo.collection(req.body.year).find({}).toArray(function (err, result) {
            if (err) throw err;
            var codelist=[]
         for (y in result) {
                for( x in  (result[y][req.body.semester]) ){
                         codelist.push((result[y][req.body.semester][x]));
                  }
         }
         console.log(codelist) ;
            db.close();
            res.send(codelist);

        });


    });

});

module.exports= router