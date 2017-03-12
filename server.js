'use strict'

const express     = require('express')
const path        = require('path')
const app         = express();
const bodyParser  = require("body-parser");
const session     = require('express-session');
const cookieParser = require('cookie-parser');
const multer      = require('multer');
const multerS3    = require('multer-s3');
const aws         = require('aws-sdk');
const morgan      = require('morgan');
const models      = require('./models')
const port        = process.env.PORT || 3000;
const pg          = require('pg');

models.sequelize.sync();

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

app.use(morgan('tiny'))
app.set('view engine', 'ejs')
const products = require('./routes/products');
const users = require('./routes/users');
app.use('/', products);
app.use('/users', users);



//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})


  app.listen(port, console.log("server started"))

