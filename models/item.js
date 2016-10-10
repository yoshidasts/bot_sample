var mongoose = require('mongoose');
var schema = mongoose.Schema({ data: mongoose.Schema.Types.Mixed});  // Empty schema
mongoose.connect('mongodb://localhost/bot_sample');
var SKU = mongoose.model('sku', schema);

/* Query SKU by SKU code */
module.exports.getSKU = function(sku_code, callback){
    SKU.findOne({"sku_code": sku_code}, function(err, data){
    if(err){
        next(err);
    }else{
        callback(data);
    }
    });
}
