var express         = require('express');
var path            = require('path');
var logger          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var debug           = require('debug')('mean-app:server');
var http            = require('http');
var mongoose        = require('mongoose');
mongoose.Promise    = require('bluebird');

var app             = express();

mongoose.connect('mongodb://currency:soyroot@ds227525.mlab.com:27525/currencyconverter', { useMongoClient: true, promiseLibrary: require('bluebird') })
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

//  View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var routes = require('./api/routes/currencyRoutes');
routes(app);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(err.message);
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.message);
    // render the error page
    res.status(err.status || 500);
    res.send({url: req.originalUrl + ' not found'});
});

module.exports = app;