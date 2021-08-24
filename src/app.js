const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

require('dotenv').config({ path: './.env' })

const app = express();

//Settings
app.set('port', process.env.PORT || 8080);
app.set('views', path.resolve(__dirname, 'views'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});

app.listen(process.env.PORT, ()=>{
    console.log(`App listen on port ${process.env.PORT}`);
})


//Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index.js'));


//404
app.use((req, res, next)=>{
    res.status(404).send('404 Page not found');
    next()
  });

module.exports = app;