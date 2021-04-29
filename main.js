let express = require('express');

let app = express();
let handlebars = require('express-handlebars').create({defaultLayout: 'main'});
let request = require('request');
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 35001);

app.get('/',function(req,res,next){
    res.render('index');
});

app.get('/characters',function(req,res,next){
    res.render('characters');
});

app.get('/items',function(req,res,next){
    res.render('itempage');
});

app.get('/spells',function(req,res,next){
    res.render('spells');
});

app.get('/classes',function(req,res,next){
    res.render('classes');
});


/* ----------------------------- ERROR HANDLING -------------------------------- */

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});