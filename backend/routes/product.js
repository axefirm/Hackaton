var express = require('express')
var router  = express.Router();
let auth    = require("../functions/auth.js")
let product = require("../functions/product.js")

router.get("/product",product.getProductOfClient)
router.post("/product", product.addProductOfClient)
module.exports = router;
