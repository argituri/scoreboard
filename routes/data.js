var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json({ type: 'application/*+json'});

var con = mysql.createConnection({
    host: process.env.dbAddr,
    user: process.env.dbPort,
    password: process.env.dbPass,
    database: process.env.dbName
});


/* GET players listing or add new player. */
router.get('/', function(req, res, next) {
    if (req.body.query){

    } else {
        console.log("Weird request");
    }
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM players", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.data(result).send();
        });
    });
});

router.post('/',jsonParser, function(req, res){
    if (req.body.add){
        con.query("INSERT INTO " + process.env.dbTableName + " VALUES (" + req.body.name + "," + req.body.score + ")", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.data(result).send();
        });
    }
})

module.exports = router;
