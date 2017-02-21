const express     = require('express');
const router      = express.Router();
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const Sequelize = require('sequelize');
const databaseURL   = 'sqlite://database.sqlite3';
const sequelize     = new Sequelize(process.env.DATABASE_URL || databaseURL);


const Product = sequelize.define('Product', {
  name: Sequelize.STRING,
  image: Sequelize.TEXT,
  description: Sequelize.TEXT,
  price: Sequelize.STRING
})


aws.config.update({
    secretAccessKey: process.env.SECRETACCESSKEY,
    accessKeyId: process.env.ACCESSKEYID,
    region: 'us-east-1'
});

var s3 = new aws.S3();

var productImages = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'my-final-store/products',
        key: function (req, file, cb) {
            cb(null, Date.now() + file.originalname);
        }
    })
});

//Get all Products
router.get('/api/products', function(req, res){
  Product.findAll().then(function(products){
    res.json(products);
  })
});


router.post('/api/new_product', productImages.any('image' ), function(req, res){
  //take array and map it
  //Map into string(array.join()) since DataType array is available in PG
  sequelize.sync().then(function() {
    return Product.create({
    name: req.body.name,
    image: req.files.map((image)=>{return image.location}).join(),
    description: req.body.description,
    price: req.body.price
  }).then(function(product){
      res.redirect('/')
    })
  })
  
})

router.get('/api/product/:id', function(req, res){
  Product.findById(req.params.id).then(function(product){
    res.json(product)
  })
})

router.get('/api/product/delete/:id', function(req, res){
  Product.delete({where: 
    {id: req.params.id}
  }).then(function(){
    res.json({msg: "Product is deleted successfully"})
  })
})

module.exports = router;