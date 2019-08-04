var express = require('express');
var router = express.Router();
//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database('db/its.db');

router.get('/', function(req, res, next) {
    // results = [];
    // db.all("SELECT * from project", function(err, rows){
    //     rows.map((row)=>{
    //         results.push({"id":row.id,
    //               "name":row.name,
    //               "description":row.description})
    //     });
    //     console.log(results);
    //     res.json(results);
    // });
    res.render('login');
});

module.exports = router;
