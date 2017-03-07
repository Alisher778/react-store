'use strict'
/* 
	Fallback server for supporting browserHistory
	in your React application. 
*/


//instatiate path and express
const express     = require('express')
const path        = require('path')
const app         = express();
const bodyParser  = require("body-parser");
const session     = require('express-session');
const cookieParser = require('cookie-parser');
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const Sequelize = require('sequelize');
const databaseURL   = 'sqlite://database.sqlite3';
const sequelize     = new Sequelize(process.env.DATABASE_URL || databaseURL);
//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs')
const products = require('./routes/products');
const users = require('./routes/users');
app.use('/', products);
app.use('/users', users);



//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>console.log('running on localhost:3000'))