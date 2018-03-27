var mongoose  = require('mongoose');
var Currency  = require('../models/currency');
var rp        = require('request-promise');
var cheerio   = require('cheerio');

exports.home = function (req, res) {

  res.status(200).render('index');
};

exports.getAll = function(req, res) {

  Currency.find(function (err, currencys){
      if(err) res.send(500, err.message);
      console.log('GET / currencys');
      res.status(200).jsonp(currencys);
  });

};

exports.convertFromTo = function (req, res) {
  
  const amount = req.params.amount;
  const from = req.params.from;
  const to = req.params.to;
  
  var options = {
    uri: 'http://www.xe.com/es/currencyconverter/convert/?Amount=' + amount + '&From=' + from +'&To=' + to,
    transform: function (body) {
        return cheerio.load(body);
    }
  };

  rp(options)
    .then(function ($) {
         let convertedValue = $('.uccResultAmount').text();
        res.status(200).send(JSON.stringify({ 
          amount: amount,
          from: from,
          value: convertedValue,
          to: to
        }));
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ message: err });
    });  
};

