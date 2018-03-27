module.exports = function(app) {
  var currency = require('../controllers/currencyController');
  
  app.route('/')
    .get(currency.home);

  app.route('/api/currencys')
    .get(currency.getAll);

  app.route('/api/currencys/:amount&:from&:to')
    .get(currency.convertFromTo);
    
};