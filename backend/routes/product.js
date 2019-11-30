var express = require('express')
var router  = express.Router();
let auth    = require("../functions/auth.js")
let product = require("../functions/product.js")

router.get("/admin",product.getProductOfClient)
router.post("/product", product.addProductOfClient)
// router.get("/admin", product.getProductOfClient)

module.exports = router;
