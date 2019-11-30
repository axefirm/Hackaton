let MongoClient  = require("mongodb").MongoClient;

let ObjectID     = require('mongodb').ObjectID;

let db;

MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, function(err, client){
  db = client.db("hackathon");
})

const date = require('date-and-time');

module.exports.getProductOfClient =  function(req, res){
  const now = new Date();
  req.body.date = date.format(now,'ddd MMM DD YYYY');
  db.collection("products").find({}).toArray(function(err, products){
    if(err) return res.json({success: false, data:{message: "Products avj chadsangui!"}})
    else return res.json({success: true, data:{products: products}})
  })
}

module.exports.addProductOfClient =  function(req, res){
  const now = new Date();
  console.log(req.body);
  const bool = false;
  req.body.bool = bool;
  req.body.date = date.format(now,'ddd MMM DD YYYY');
  db.collection("products").insertOne(req.body, function(err, dbres){
    if(err) res.json({success: false, data: {message: "Insert hiisengui!"}})
    else res.json({success: true, data: {message: "Product added"}})
  })
}
module.exports.updateProductBool = function(req,res){
  db.collection("products").updateOne({_id: ObjectID(req.params.id)}, {$set: req.body},function(err, dbres){
    if(err) return res.json({success: false, data:{message: "Update hiisengui!"}})
    else return res.json({success: true, data:{message:"Update hiigdlee"}})
  })
}
