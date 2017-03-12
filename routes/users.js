const express     = require('express');
const router      = express.Router();
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const passwordHash  = require('password-hash');

const models = require('../models');

models.sequelize.sync();

// If you are using Heroku, make sure You pass process.env to heroku as "$heroku config:set SECRETACCESSKEY=783y27539984893uy49y9 "
aws.config.update({
    secretAccessKey: process.env.SECRETACCESSKEY,
    accessKeyId: process.env.ACCESSKEYID,
    region: 'us-east-1'
});

models.sequelize.sync();

const s3 = new aws.S3();

const userImage = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'my-final-store/users',
        key: function (req, file, cb) {
            cb(null, Date.now() + file.originalname);
        }
    })
});


router.get('/api/users', function(req, res){
  models.User.findAll().then(function(users){
    res.json(users)
  })
});

//Get a New User Form *******************************************************
router.get('/api/user/:id', function(req, res){
  models.User.findById(req.params.id).then(function(user){
    res.json(user);
  }).catch((err)=>{
      console.error(err)
  })
});

// ********************** User SIGN UP *******************************************
router.post('/api/register', userImage.single('avatar'), function(req, res){
  models.User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: passwordHash.generate(req.body.password),
      avatar: req.file.location
    }).then(function(user){
      console.log("Created user...");
      req.session.username = user.id;
      res.redirect(`/profile/${user.id}`)
    }).catch((err)=>{
      console.error('user register....',err)
    })
})

// ********************** Login function ******************************************
router.post('/api/login', function(req, res){
  const email = req.body.email;
  const password = req.body.password;
  models.User.count({where: {email: email }})
    .then(function(numberOfuser){
      if(!numberOfuser == 0){
        models.User.findOne({ where: {email: email }})
          .then(function(user){
            const pass = passwordHash.verify(req.body.password, user.password);
            if(pass){
              req.session.username = user.id;
              console.log(req.session.username)
              res.redirect('/')
            }else{
              res.json({error: "wrong password"})
            }
          })
      }else{
        res.json({error: "email not found"})
      }
    }).catch((err)=>{
      console.error(err)
    })
})

// ******************** Send CurrentUser Id to React State ************************
router.get('/username', function(req,res){
  req.session.username;
  console.log('request received ....')
  res.json({username: req.session.username})
});


router.get('/logout', function(req, res){
    req.session.username = null;
    res.redirect('/')
    console.log("--------------logged out----------------")
});



// Create Users address*********************************************************

router.post('/api/user/:id/address', function(req, res){
    models.Address.create({
      user_id:   req.params.id,
      full_name: req.body.full_name,
      street:    req.body.street,
      apartment: req.body.apartment,
      city:      req.body.city,
      state:     req.body.state,
      zip:       req.body.zip,
      country:   req.body.country,
      phone:     req.body.phone,
      note:      req.body.note
    }).then(function(result){
      req.session.username;
      res.redirect(`/profile/${req.session.username}`)
    }).catch((err)=>{
      console.error(err)
    })  

})

router.get('/api/user/address/:user_id', function(req, res){
  models.Address.findAll({where: {user_id: req.params.user_id}})
    .then(function(result){
      req.session.username;
      res.json(result);
    }).catch((err)=>{
      console.error(err)
    })
})

//  Delete the address by Id
router.get('/api/user/address/:id/delete', function(req, res){
  models.Address.destroy({where: {id: req.params.id}})
    .then(function(result){
      console.log(result)
      res.redirect('/')
    })
})


// Create Shopping cart ***********************************************************

router.post("/api/cart/:user_id/:product_id", function(req, res){
   models.Cart.findAll({
     where: { user_id: req.params.user_id || 0, product_id: req.params.product_id || 0}
   }).then(function(data){
     console.log("find cart ----",data.length)
     if(data.length == 0){
        models.Cart.create({
           user_id: req.params.user_id,
           product_id: req.params.product_id,
           product_name: req.body.product_name,
           product_image: req.body.product_image,
           product_info: req.body.product_info,
           product_price: req.body.product_price,
           product_quantity: req.body.product_quantity,
           product_color: req.body.product_color
         }).then(function(result){
           res.json(result);
         })   
     }else{
      console.log("User id before ----", data)
       return data[0].increment({
         product_quantity: req.body.product_quantity
       }).then(function(data){
         res.json(data)
       })
     }
   }).catch((err)=>{
      console.error(err)
    })   
})


router.get("/api/carts", function(req, res){
  req.session.username;
  models.Cart.findAll().then(function(data){
    res.json(data)
  }).catch((err)=>{
      console.error(err)
  })
})

router.get('/api/cart/:user_id', function(req, res){
  req.session.username;
  models.Cart.findAll({where: {user_id: req.params.user_id || 0}})
    .then(function(data){
      res.json(data)
    }).catch((err)=>{
      console.error(err)
    })
})

router.get('/api/cart/:id/delete', function(req, res){
  req.session.username;
  models.Cart.destroy({
    where: {id: req.params.id}
  }).then(function(data){
    res.redirect('/')
    console.log("item was deleted successfully")
  }).catch(function(error){
    console.error(error)
  })
})


router.use(function(req, res, next) {
  if (req.session.username){
    next();
    return;
  }
    res.redirect('/');
    
});

module.exports = router;