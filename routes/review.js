var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    var header = {
        'title': 'Review | IC Efficiency',
        'keywords': 'IC, Efficiency',
        'description': 'Efficient suite for IC flow and management'
    };

    //console.log(dat);
    res.render('review', {header: header});
});

module.exports = router;
