var express = require('express');
var router = express.Router();
var MarkdownIt = require('markdown-it');
var fs = require('fs');
var path = require('path');
var marpit = require('@marp-team/marpit');

router.get('/', function(req, res, next) {

    var header = {
        'title': 'Know-how | IC Efficiency',
        'keywords': 'IC, Efficiency',
        'description': 'Efficient suite for IC flow and management'
    };

    //get url parameter: md=xxx
    var md_name = "index.md";
    if(typeof req.query.md != "undefined"){
        md_name = req.query.md + ".md";
    }
    //console.log("markdown: [" + md_name + "]");
    
    //check md type
    var md_type = "md_normal";
    if(typeof req.query.md != "undefined"){
        if(req.query.md.endsWith('.ppt')){
            md_type = "md_ppt";
        }
    }

    //read md file, parse, and render
    fs.readFile(path.join(__dirname, '../knowhow/md', md_name), function(err, data){
        if(err){console.error(err);}
        md = data.toString();

        //parse md to html
        if(md_type == "md_ppt"){
            var marp = new marpit.Marpit();

            const theme = `
                /* @theme example */
                section {
                    width: auto;
                    //height: auto;
                    background-color: #369;
                    color: #fff;
                    font-size: 30px;
                    padding: 40px;
                    margin: 10px auto;
                }

                h1,
                h2 {
                    text-align: center;
                    margin: 0;
                }

                h1 {
                    color: #8cf;
                }
                `;
            marp.themeSet.default = marp.themeSet.add(theme);

            var {html,css} = marp.render(md);
        }else{
            var markdownit = new MarkdownIt();
            var html = markdownit.render(md);
            var css = "";
        }

        res.render('knowhow', {header: header, html: html, css: css});
    });    
    
});

module.exports = router;
