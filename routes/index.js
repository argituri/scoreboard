var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scoreboard', port: process.env.PORT, helperAddr: process.env.helperAddr });
});

module.exports = router;
