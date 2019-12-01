let MongoClient = require("mongodb").MongoClient;
let ObjectID    = require("mongodb").OjectID;
let jwt         = require("jsonwebtoken");

let db;

MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, function(err, client){
  db = client.db("hackathon");
})

module.exports.login = function(req, res){
  db.collection("user").findOne({username: req.body.username}, function(err, foundOne){
    if(err) res.json({success: false, data: {message: "Server error mongodb!!!"}})
    if(!foundOne) res.json({success: false, data: {message: "Username or password is wrong"}})
    if(foundOne.password == req.body.password){
      let token = jwt.sign({
        username: foundOne.username,
        password: foundOne.password,
        _id: foundOne._id
      }, "theSecretKeyToEncryptAndDecrypt")
      res.json({success: true, data: { token: token, _id: foundOne._id}})
    } else res.json({success: false, data: {message: "Username or password is wrong"}})
  })
}
module.exports.signup = function(req, res){
  let now = new Date();
  let card = [];
  let products = [];
  req.body.products = products;
  req.body.card = card;
  let data = {username: req.body.username, password: req.body.password,lastname:req.body.lastname,firstname:req.body.firstname, card: req.body.card, products: req.body.products, createdAt: now};
  console.log(data);
  db.collection("user").findOne({username: req.body.username}, function(err, foundOne){
    if(err) res.json({success: false, data: {message: "Server error mongodb!!!"}})
    if(!foundOne){
      db.collection("user").insertOne(data, function(err, insertedOne){
        if(err) res.json({success: false, data: {message: "Server error mongodb!!!"}})
        res.json({success: true})
      })
    } else res.json({success: false, data: {message: "Username is already in use!!!"}})
  })
}

module.exports.adminSignup = function(req, res){
  let now = new Date();
  let data = {username: req.body.username, password: req.body.password, createdAt: now};
  console.log(data);
  db.collection("admin").findOne({username: req.body.username}, function(err, foundOne){
    if(err) res.json({success: false, data: {message: "Server error mongodb!!!"}})
    if(!foundOne){
      db.collection("admin").insertOne(data, function(err, insertedOne){
        if(err) res.json({success: false, data: {message: "Server error mongodb!!!"}})
        res.json({success: true})
      })
    } else res.json({success: false, data: {message: "Username is already in use!!!"}})
  })
}

module.exports.adminLogin = function(req, res){
  console.log(req.body.username)
  db.collection("admin").findOne({username: req.body.username}, function(err, foundOne){
    console.log(foundOne)
    if(err) res.json({success: false, data: {message: "Server error mongodb!!!"}})
    if(!foundOne) res.json({success: false, data: {message: "Username or password is wrong"}})
    if(foundOne.password == req.body.password){
      let token = jwt.sign({
        username: foundOne.username,
        password: foundOne.password,
        _id: foundOne._id
      }, "theSecretKeyToEncryptAndDecrypt")
      res.json({success: true, data: { token: token, _id: foundOne._id}})
    } else res.json({success: false, data: {message: "Username or password is wrong"}})
  })
}

module.exports.mjolnir = function(req, res){
  jwt.verify(req.params.token, "theSecretKeyToEncryptAndDecrypt", function(err, decoded){
    if(err) res.json({success: false})
    if(decoded._id == req.params.id){
      console.log("You are worthed")
      res.json({success: true})
    }
    else res.json({success: false})
  })
}

module.exports.checkToken = function(req, res, next){
  jwt.verify(req.headers.authorization, "theSecretKeyToEncryptAndDecrypt", function(err, decoded){
    if(err) res.json({success: false})
    if(decoded) next();
    else res.json({success: false})
  })
}
