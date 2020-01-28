
var express = require('express');
var router = express.Router();

// get home page
router.get('/', function(req, res, next) {

  var header = {
    'title': 'IC Efficiency',
    'keywords': 'IC, Efficiency',
    'description': 'Efficient suite for IC flow and management'
  };

  //define cards data for home page
  var dat = [
    {
      'title': 'Daily Report',
      'description': 'Track and plan'
    },
    {
      'title': 'Know-how',
      'description': 'Share experience'
    },
    {
      'title': 'Review',
      'description': 'Code review'
    },
    {
      'title': 'BUG',
      'description': 'Issue tracking system'
    },
    {
      'title': 'Chat',
      'description': 'Live communication'
    },
    {
      'title': 'Progress',
      'description': 'Project progress'
    },
  ];

  res.render('index', { header: header, dat : dat, ver: '0.1.0' });
});

module.exports = router;
