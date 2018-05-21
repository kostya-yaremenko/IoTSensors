var express         = require('express');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');


var routes = require('./routes/index');
var users = require('./routes/users');
var signin = require('./routes/signin');
var signup = require('./routes/signup');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
// app.use('/signin', signin);
// app.use('/signup', signup);

// add query functions


// var client = new pg.Client({
//   user: "sqxlcsuymisnbu",
//   password: "dyXu70Wuc2jTXyGwFGXFEnYloD",
//   database: "d66fqis9thtm0k",
//   port: 5432,
//   host: "ec2-50-19-227-171.compute-1.amazonaws.com",
//   ssl: true
// });
// client.connect();


// app.get('/signup', function(req, res){
//   res.render('signup')
// });

// app.post('/save_user', function(req, res, next) {
//     //
//     //save to DB
//     //
//     res.sendFile(path.join(__dirname, 'views/sigin.html'));
// });

// app.get('/signup', function(req, res, next) {
//     res.sendFile(path.join(__dirname, 'views/sign_up.html'));
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
