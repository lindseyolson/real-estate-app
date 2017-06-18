// requires
var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var index = require ('./modules/routes/index');
var properties = require ('./modules/routes/properties');
var path = require ('path');

// globals
var port = process.env.PORT || 1616;

// uses
app.use (express.static('public'));
app.use (bodyParser.urlencoded ({ extended:true }));
app.use ('/', index);
app.use ('/properties', properties);

// server
app.listen(port, function(){
  console.log('server up on port:', port);
});
