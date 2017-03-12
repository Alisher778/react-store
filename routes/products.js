const express     = require('express');
const router      = express.Router();
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const $           = require('jquery');
const axios       = require('axios');
const models      = require('../models');
models.sequelize.sync();



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


// ################# DELETE Product By Id ###################
router.get('/api/product/delete/:id', function(req, res){
  models.Product.findById(req.params.id)
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



// ################# Find All Products ###################
router.get('/api/products', function(req, res){
  models.Product.findAll().then(function(products){
    res.json(products);
  })
});

// ################# Post New Product ###################
router.post('/api/new_product', productImages.single('image'), function(req, res){
  return models.Product.create({
    name: req.body.name,
    image: req.file.location,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  }).then(function(product){
      res.redirect('/')
  }).catch((err)=>{
    console.error(err)
  })  
})

// ################# Find Product By Id ###################
router.get('/api/product/:id', function(req, res){
  models.Product.findById(req.params.id).then(function(product){
    res.json(product)
  }).catch((err)=>{
    console.error(err)
  })
})


// ################# Find Product By Category###################
router.get('/api/products/:category', (req, res)=>{
  console.log("Find by Ctaegory Before route requested ----")
  models.Product.findAll({where: {category: req.params.category}})
    .then((products)=>{
      res.json(products)
        console.log("Find by Ctaegory Before route requested ----")

    })
})


module.exports = router;