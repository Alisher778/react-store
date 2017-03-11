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
const port        = process.env.PORT || 3000;
const pg = require('pg');
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



app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

sequelize.sync().then(function(){
  app.listen(port, console.log("server started"))
})
