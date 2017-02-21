const express     = require('express');
const router      = express.Router();
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const Sequelize = require('sequelize');
const databaseURL   = 'sqlite://database.sqlite3';
const sequelize     = new Sequelize(process.env.DATABASE_URL || databaseURL);


const User = sequelize.define('User', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.TEXT,
  bio: Sequelize.TEXT
})


router.get('/api/users', function(req, res){
  User.findAll().then(function(users){
    res.json(users)
  })
});

//Get a New User Form ********************************************************
router.get('/new/users', function(req, res){
  res.render('user');
})


router.post('/api/new_user', function(req, res){
  sequelize.sync().then(function() {
    return User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      bio: req.body.bio
    }).then(function(user){
      res.json(user)
    })
  })
})

module.exports = router;