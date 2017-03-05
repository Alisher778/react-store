const express     = require('express');
const router      = express.Router();
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const passwordHash  = require('password-hash');
const Sequelize = require('sequelize');
const databaseURL   = 'sqlite://database.sqlite3';
const sequelize     = new Sequelize(process.env.DATABASE_URL || databaseURL);

aws.config.update({
    secretAccessKey: process.env.SECRETACCESSKEY,
    accessKeyId: process.env.ACCESSKEYID,
    region: 'us-east-1'
});

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

const User = sequelize.define('User', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.TEXT,
  email: Sequelize.TEXT,
  password: Sequelize.STRING,
  avatar: {type: Sequelize.TEXT, defaultValue: "https://s3.amazonaws.com/my-final-store/users/avatar.png"}
});

const Address = sequelize.define('Address', {
  user_id: Sequelize.INTEGER,
  full_name: Sequelize.STRING,
  street: Sequelize.TEXT,
  apartment: Sequelize.TEXT,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  country: Sequelize.STRING,
  phone: Sequelize.STRING,
  note: Sequelize.TEXT
});

const Cart = sequelize.define('Cart', {
  user_id: Sequelize.INTEGER,
  product_id: Sequelize.INTEGER,
  product_name: Sequelize.STRING,
  product_image: Sequelize.TEXT,
  product_info: Sequelize.TEXT,
  product_price: Sequelize.STRING,
  product_quantity: Sequelize.INTEGER,
  product_color: Sequelize.STRING,
})

User.hasMany(Cart); 
User.hasMany(Address);

router.get('/api/users', function(req, res){
  User.findAll().then(function(users){
    res.json(users)
  })
});

//Get a New User Form *******************************************************
router.get('/api/user/:id', function(){
  User.findById(req.params.id).then(function(user){
    res.json(user);
    console.log(user);
  })
});

router.get('/api/user/:email', function(){
  User.findAll({where: {
      email: req.params.email
    }
  }).then(function(user){
    res.json(user);
    console.log(user);
  })
});

router.post('/api/register', userImage.single('avatar'), function(req, res){
  sequelize.sync().then(function() {
    return User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: passwordHash.generate(req.body.password),
      avatar: req.file.location
    }).then(function(user){
      res.json(user)
    })
  })
})


// Create Users address*********************************************************

router.post('/api/user/:id/address', function(req, res){
  sequelize.sync().then(function(){
    return Address.create({
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
      res.json(result)
    })
  })
})

router.get('/api/user/address/:user_id', function(req, res){
  Address.findAll({where: {user_id: req.params.id}})
    .then(function(result){
      res.json(result);
      console.log(result);
    })
})

module.exports = router;