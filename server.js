'use strict'
/* 
	Fallback server for supporting browserHistory
	in your React application. 
*/


//instatiate path and express
const express = require('express')
const path = require('path')
const app = express();
const model = require('./models');
const bodyParser = require("body-parser");

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.set('view engine', 'ejs')

//********************************************************************************
//********************************************************************************
                            //** USERS **//

//Get all Users
app.get('/api/users', function(req, res){
  model.User.findAll().then(function(users){
    res.json(users)
  })
});

//Get a New User Form ********************************************************
app.get('/new/users', function(req, res){
  res.render('user');
})


app.post('/api/users', function(req, res){
  model.User.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    bio: req.body.bio
  }).then(function(user){
    res.redirect('/')
  })
})

//========================================================================

//********************************************************************************
//********************************************************************************
                            //** PRODUCTS **//

//Get all Products
app.get('/api/products', function(req, res){
  model.Products.findAll().then(function(products){
    res.json(products);
  })
});

app.post('/api/new_product', function(req, res){
  model.Post.create({
    name: req.body.name,
    image: req.file.path,
    description: req.body.description,
    price: req.body.price
  }).then(function(product){
    res.json(product)
  })
})

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>console.log('running on localhost:3000'))