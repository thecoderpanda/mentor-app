//Require all files
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cons = require('consolidate');
var swig = require('swig');


//Declaring Database Schema
// var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;
// var User = mongoose.model('User', new Schema(
// 		{
// 			id:ObjectId,
// 			name: String,
// 			age : Number,
// 			gender : String
// 		}
// ));

//Connecting the mongoose database
//mongoose.connect('mongodb://localhost/rest_api');


//Init app
var app =express();


//For caching of content
var oneDay = 86400000;

//ALL CONFIGURATIONS
// view engine setup
app.engine('html', cons.swig)

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));
app.set('view engine', 'html');

//Have the HTML in the view source
app.locals.pretty = true;

//set body parser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.get('/', function(req, res){
  res.render('index');
});

//Declaring the listening port 
var port = process.env.PORT || '2000';

app.listen(port, function(){
	console.log('listening on port: '+port);
})

