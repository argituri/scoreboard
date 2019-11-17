var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json({ type: 'application/*+json'});

var con = mysql.createConnection({
    host: process.env.dbAddr,
    user: process.env.dbUser,
    password: process.env.dbPass,
    database: process.env.dbName
});


router.get('/', function(req, res) {
    console.log("GOT GET")
    /*con.connect(function(err) {
        if (err) {
            console.log("db connection error...")
            console.log(err);
            res.status(500).send(err);
        } else {*/
            con.query("SELECT * FROM " + process.env.dbTableName + ";", function (err, result, fields) {
                if (err){
                    console.log("db select query error: " + err);
                    res.status(500).send(err);
                } else {
                    var returnData = {data: []}
                    console.log(result);
                    result.forEach(entry => {
                        console.log("Handling entry : " + entry);
                        returnData.data.push([entry.name, entry.score])
                    })
                    res.status(200).send(returnData);
                }
            });
        //}
    //});
});

router.post('/',jsonParser, function(req, res){
    /*con.connect(function(err) {
        if (err) {
            console.log("db connection error...")
            console.log(err);
            res.status(500).send(err);
        } else {*/
    console.log("got request : " + req)
    console.log("Adding " + req.body.name + ", " + req.body.score);
            if (req.body.name && req.body.score) {
                con.query("INSERT INTO " + process.env.dbTableName + " VALUES (" + req.body.name + "," + req.body.score + ");", function (err, result, fields) {
                    if (err){throw err;} else {
                        console.log(result);
                        res.status(200).send("1");
                    }

                });
            }
       // }
    //});
})

module.exports = router;
