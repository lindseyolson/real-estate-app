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
    res.send(data);
  });
}); // end get

// POST
router.post('/', function(req,res){
  console.log('POST route hit:', req.body);
  var newRecord = listingModel(req.body);
  newRecord.save();
  res.sendStatus(201);
}); // end post

// DELETE
router.delete('/:id', function(req,res){
  console.log('DELETE route hit:', req.params.id);
  var id = req.params.id;
  // console.log('ObjectId(id)');
  listingModel.remove({_id: id}).then(function(){
    // console.log({_id: ObjectId(id)});
      res.sendStatus(200);
    });
    // .catch(function(err){
    //     res.sendStatus(500);
    //   });
}); // end delete

module.exports = router;
