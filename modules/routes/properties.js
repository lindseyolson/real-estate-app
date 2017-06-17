// requires
var express = require ('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

// uses
router.use (bodyParser.urlencoded ({  extended:true }));
router.use (bodyParser.json());

// connect to mongoose
mongoose.connect('localhost:/27017/propertyController');


// GET
router.get('/', function(req,res){
  console.log('/properties GET route hit');
  res.send('GET works');
}); // end get


module.exports = router;
