var express = require('express')
var router  = express.Router();
let auth    = require("../functions/auth.js")
let product = require("../functions/product.js")
var multer = require('multer')
const cors = require('cors')
const app = express()
app.use(cors())
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../frontend/assets/productphoto/')
    },
    filename: function(req, file, cb){
        // console.log(file);
        cb(null, Date.now() + file.originalname)
    }
})
const fileFilter = (res, file, cb)=>{
    // reject file
    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*5
    },
    fileFilter: fileFilter,
})
router.get("/product",product.getProductOfClient)
router.post("/product", product.addProductOfClient)
router.post("/photo",upload.single('productImage'),(req, res, next) =>{
    if(req.file){
        console.log(req.file);
        req.body.photo = req.file.filename;
        res.send(req.file.filename);
    }
})

router.get("/admin",product.getProductOfClient)
// router.get("/admin", product.getProductOfClient)
module.exports = router;
