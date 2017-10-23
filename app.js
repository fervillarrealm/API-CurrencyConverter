    var express         = require('express');
    var path            = require('path');
    var logger          = require('morgan');
    var bodyParser      = require('body-parser');
    var methodOverride  = require('method-override');
    var mongoose        = require('mongoose');
    var https           = require('https');
    var jsdom;
    try{
        jsdom           = require('jsdom/lib/old-api.js');
    } catch(e){
        jsdom           = require('jsdom');
    }


    var app = express();

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(methodOverride());

    var router = express.Router();
    var connectionUrl = 'mongodb://currency:soyroot@ds227525.mlab.com:27525/currencyconverter';
    var requestUrl = 'https://finance.google.com/finance/converter?a=1&from=USD&to=MXN';

    var options = {
        host: 'finance.google.com',
        path: '/finance/converter?a=1&from=USD&to=MXN',
        port: 443,
        method: 'GET'
    }
    var htmlString = '';
    var request = https.request(options, function (res){
        console.log(res.statusCode);

        res.on('data', function (chunk){
            htmlString += chunk;
        });
    });

    request.end();


    request.on('error', function (e){
        console.log(e);
    });

    setTimeout(function (){
        jsdom.env(htmlString,
            ['http://code.jquery.com/jquery.js'], function (errors, window) {
                console.log('',  window.$('div#currency_converter_result span.bld').text());
            }
        );
    }, 3000);

    router.get('/', function (req, res){
        res.send('Welcome to API Currency Converter');
    });

    app.use(router);

    var promise = mongoose.createConnection(connectionUrl, function (err, res){
        if(err){
            console.log(err);
        }

        useMongoClient: true
    });

        app.listen(3000, function (){
            console.log('Node server running on http://localhost:3000');
        });

