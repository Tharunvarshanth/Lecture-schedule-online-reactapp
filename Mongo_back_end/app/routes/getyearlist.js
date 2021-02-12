var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', async (req,res) =>{
    var dbname = req.query.dep
    console.log("getyearlist")
    console.log(req.query.dep)
    MongoClient.connect(url,{ useUnifiedTopology: true, } ,function(err,db){
             
        if(err) throw err;

        var dbo = db.db(req.query.dep)
        
        var collectionlist = []
        dbo.listCollections().toArray(function(err,result){
        
         for(var i=0;i<(result.length);i++){
         
           collectionlist.push(result[i].name)
         }
         console.log(collectionlist)

          db.close()
          return res.send(collectionlist) ;   
        })
       
    })
})






  

module.exports =router