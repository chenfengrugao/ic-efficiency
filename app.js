
var express = require('express');
var fs = require("fs");
var url = require("url");
//var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

//create express obj
var app = express();
app.use('/public', express.static('public')); //static router
app.set('views', 'views');
app.set('view engine', 'ejs');
//app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

//load json files


app.get('/', function(req, res){
    res.render('index', {"ver": "0.1.0"});
});

app.post('/login', function(req, res){
    var username = req.body.username;
    var passwd = req.body.passwd;
    //console.log("u:" + username + "p:" + passwd);
    if(username == "chenf" && passwd == "123456"){
	res.send("登录成功");
    }else{
	res.send("用户名或密码错误");
    }
});

app.get('/add', function(req, res){
    res.render('add', {});
});


app.get('/add_handle', function(req, res){
    var params = url.parse(req.url, true).query;
    params.datetime = new Date().toLocaleString();
    global.word.data.push(params);
    res.send("添加成功");
});


app.get('/modify', function(req, res){
    var params = url.parse(req.url, true).query;
    var word = params.w
    var phonetic = "";
    var explanation = "";
    for(var i=0; i<global.word.data.length; i++){
	if(global.word.data[i].name == params.w){
	    //console.log(global.word.data[i]);
	    phonetic = global.word.data[i].phonetic;
	    explanation = global.word.data[i].explanation;
	    sentence = global.word.data[i].sentence;
	    break;
	}
    }
    res.render('modify', {"name": word, "phonetic": phonetic, "explanation": explanation, "sentence": sentence});
});

app.get('/modify_handle', function(req, res){
    var params = url.parse(req.url, true).query;
    var word = params.name;
    var phonetic = params.phonetic;
    var explanation = params.explanation;
    var sentence = params.sentence;
    for(var i=0; i<global.word.data.length; i++){
	if(global.word.data[i].name == word){
	    global.word.data[i].phonetic = phonetic;
	    global.word.data[i].explanation = explanation;
	    global.word.data[i].sentence = sentence;
	    break;
	}
    }
    
    res.send("修改成功");
});


app.get('/delete', function(req, res){
    var params = url.parse(req.url, true).query;
    var word = params.w
    for(var i=0; i<global.word.data.length; i++){
	if(global.word.data[i].name == word){
	    global.word.data.splice(i, 1);
	    break;
	}
    }
    res.send("删除成功");
});


app.get('/save_handle', function(req, res){
    var s = JSON.stringify(word);
    fs.writeFileSync('word.json', s);
    res.send("success");
});

var httpServer = app.listen(3001, function(){
    console.log("server running at http://127.0.0.1:3001");
});

		  
