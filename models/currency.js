exports = module.exports = function(app, mongoose) {

    var currencySchema = new mongoose.Schema({
        id:             { type: String },
        description:    { type: String }
    });

    mongoose.model('currencys', currencySchema);
};
