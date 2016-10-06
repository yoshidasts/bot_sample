var item = require('../models/item');

/* Abstract Receive Message to find item by sku_code */
module.exports.findItem = function(req, res, next) {
    var sku_code = res.params.sku_code;
    
    item.getSKU(sku_code, function(sku){
        res.params.sku = sku;
        next();
    });
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({ 'status': 'OK' });
};
