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
    console.log("GOT GET")
    con.connect(function(err) {
        if (err) {
            console.log("db error...")
            throw err;
        }
        con.query("SELECT * FROM " + process.env.dbTableName, function (err, result, fields) {
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
