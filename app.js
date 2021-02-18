require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('flash');

var dbConfig = require('./config/db');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url, dbConfig.options);
mongoose.Promise = global.Promise;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    cookie: { maxAge: 1000*60*60*24 },
    resave: true,
    saveUninitialized: true
}));
require('./config/passport')(app);
app.use(flash());

app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/auth'));
app.use('/admin', require('./routes/admin'));
app.use('/customers', require('./routes/customers'));

app.listen(process.env.PORT, function() {
    console.log('Start server on port:', process.env.PORT);
});
