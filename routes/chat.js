var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    var header = {
        'title': 'Chat | IC Efficiency',
        'keywords': 'IC, Efficiency',
        'description': 'Efficient suite for IC flow and management'
    };

    //console.log(dat);
    res.render('chat', {header: header});
});

module.exports = router;
