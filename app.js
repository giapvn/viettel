'use strict'
// Khong can thiet phai su dung db
var global = require('./configs/global.js');
// var mongoose = require('mongoose');
var express = require('express');
var google = require('googleapis');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var morgan = require('morgan');
var MongoStore = require('connect-mongo')(session);

var api = require('./routes/api.js');

// var mongoConnectionString = require('./configs/config.js').mongoConnectionString;




// connect data base
// mongoose.connect(mongoConnectionString);

var app = express();
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3333);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(session({
//     secret: 'anhtu',
//     cookie: { maxAge: 600000 },
//     resave: true,
//     saveUninitialized: true,
//     store: new MongoStore({
//         url: mongoConnectionString,
//         ttl: 60 * 10
//     })
// }));
app.use(express.static(__dirname + '/public'));

// config passport
app.use(passport.initialize());
app.use(passport.session());
require('./passport/local-passport.js')(passport);

var router = require('./routes/api.js');

app.use('/', router);

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     next();
// });

app.get('/oauth2callback', function(req, res) {

    console.log(req.query.code);
    res.send(req.query.code);
});

app.listen(app.get('port'), function() {
    console.log("server started on http://localhost:" + app.get('port') + ";\n please press Ctrl+C to terminate");
});
