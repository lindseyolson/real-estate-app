// requires
var express = require ('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

// uses
router.use (bodyParser.urlencoded ({  extended:true }));
router.use (bodyParser.json());

// connect to mongoose
mongoose.connect('localhost:27017/realestate');

// schema
var newListing = new mongoose.Schema({
  cost: Number,
  rent: Number,
	sqft: Number,
	city: String
}); // end schema

// property model
var listingModel = mongoose.model ('listings', newListing);

// GET
router.get('/', function(req,res){
  console.log('/properties GET route hit');
  listingModel.find().then(function(data){
  // listingsModel.find().then(function(response){
    console.log(data);
    res.send(data);
  }); // end find
}); // end get


module.exports = router;
