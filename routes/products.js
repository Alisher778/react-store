const express     = require('express');
const router      = express.Router();
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const Sequelize = require('sequelize');
const databaseURL   = 'sqlite://database.sqlite3';
const sequelize     = new Sequelize(process.env.DATABASE_URL || databaseURL);
const $           = require('jquery');
const axios       = require('axios');

const Product = sequelize.define('Product', {
  name: Sequelize.STRING,
  image: {type: Sequelize.STRING, allowNull: true},
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



router.get('/api/product/delete/:id', function(req, res){
  Product.findById(req.params.id)
    .then(function(respond){
      //Delete image using Axios ajax
      axios.delete(`${respond.image}`)
      .then(function(info){
        console.log('success',info)
      }).catch(function(e){
        console.error(e)
      })
      respond.destroy({
        where: {
          id: respond.id
        }
      }).then(function(){
        res.redirect('/')
      })
      
    })
})




//Get all Products
router.get('/api/products', function(req, res){
  Product.findAll().then(function(products){
    res.json(products);
  })
});


router.post('/api/new_product', productImages.single('image'), function(req, res){
  console.log(req.body)
  sequelize.sync().then(function() {
    return Product.create({
    name: req.body.name,
    image: req.file.location,
    description: req.body.description,
    price: req.body.price
  }).then(function(product){
    console.log(product)
    console.log(product.file)
      res.redirect('/')
    })
  })
  
})

router.get('/api/product/:id', function(req, res){
  Product.findById(req.params.id).then(function(product){
    res.json(product)
  })
})


module.exports = router;