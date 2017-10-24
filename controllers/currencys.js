//File: controllers/currencys.js
var mongoose    = require('mongoose');
var Currencys   = mongoose.model('currencys');

        console.log('Dentro de findAllCurrencys');
//  GET - Return all currencys alvailable
exports.findAllCurrencys = function (req, res){
    Currencys.find(function (err, currencys){

        if(err) res.send(500, err.message);

        console.log('GET / currencys');
        res.status(200).jsonp(currencys);
    });
};

