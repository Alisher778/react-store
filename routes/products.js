const express     = require('express');
const router      = express.Router();
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const $           = require('jquery');
const axios       = require('axios');
const models      = require('../models');


models.sequelize.sync();


// If you are using Heroku, make sure You pass process.env to heroku as "$heroku config:set SECRETACCESSKEY=783y27539984893uy49y9 "
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
  let file = '';
    
  if(req.file == undefined){
    file = 'https://s3.amazonaws.com/my-final-store/products/product-default.png';
  }
    
  return models.Product.create({
    name: req.body.name,
    image: file,
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


// ################## Update prodcut by Id ######################

router.post('/api/product/:id/edit', productImages.single('image'), function(req, res){
  models.Product.findById(req.params.id).then((data)=>{
    let file = '';
    if(data.image){
      console.log(data.image)
      file = data.image;
    }else{
      console.log("error")
      file = "default";
    }
    return data.update({
      name: req.body.name,
      image: file,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category}, {
      where: {
        id: req.params.id
      }
    }).then(function(product){
      res.redirect('/')
    }).catch((err)=>{
      console.error(err)
    })  
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