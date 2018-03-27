var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrencySchema = new Schema({
    id:             { type: String, required: true },
    description:    { type: String, required: true }
});

module.exports = mongoose.model('currencys', CurrencySchema);
