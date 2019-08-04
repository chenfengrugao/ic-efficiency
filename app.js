
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var mainRouter = require('./routes/main');
var newIssueRouter = require('./routes/newIssue');
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/main', mainRouter);
app.use('/newIssue', newIssueRouter);


var httpServer = app.listen(3001, function(){
    console.log("server running at http://127.0.0.1:3001");
});

		  
