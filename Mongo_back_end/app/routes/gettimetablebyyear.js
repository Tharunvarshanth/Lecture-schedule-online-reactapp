var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/',function(req,res){
       
    MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){

        if(err) throw err;
         console.log("hi")
        var dbo = db.db(req.query.dep)
        var arrlist=[]
        dbo.collection(req.query.year).find({}).toArray(function(err, result) {
            if (err) throw err;
                 for(x in result[0].sem1){
                     tem =result[0].sem1[x]
                     tem.year=req.query.year
                     tem.sem="sem1"
                     arrlist.push(tem)
                 }
                  for(x in result[1].sem2){
                      tem =result[1].sem2[x]
                      tem.year=req.query.year
                      tem.sem="sem2"
                      arrlist.push(tem)
                  }

                  db.close();
                  res.send(arrlist);
        });
    })    
})

module.exports =router