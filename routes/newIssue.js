var express = require('express');
var router = express.Router();
//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database('db/its.db');

router.get('/', function(req, res, next) {
    res.render("newIssue");
});

module.exports = router;
