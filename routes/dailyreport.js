var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/iceff.db');

router.get('/', function(req, res, next) {

    var header = {
        'title': 'Daily Report | IC Efficiency',
        'keywords': 'IC, Efficiency',
        'description': 'Efficient suite for IC flow and management'
      };

    var dat = [];
    db.all("SELECT * from dailyreport", function(err, rows){
        rows.map((row)=>{
            dat.push({
                "id":row.id,
                "uid": row.uid,
                "dt":row.dt,
                "dr":row.dr
            })
        });
        console.log(dat);
        res.render('dailyreport', {header: header, dat: dat});
    });

});

module.exports = router;
