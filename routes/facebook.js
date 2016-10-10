var express = require('express');
var common = require('./common');
var config = require('config');
var http = require('http');

var router = express.Router();

/* Query Item by Facebook Message */
router.post(''
    /* Receive Message */
    ,function(req, res, next) {
        // Verify Input data
        res.params = {};
        if(!req.body || !req.body.entry || !req.body.entry[0].messaging || !req.body.entry[0].messaging[0].message || !req.body.entry[0].messaging[0].message.text){
            res.status(400).send({"message": "Request structure is fault"});
        }else if(req.body.entry[0].messaging[0].message.text == ''){
            res.status(400).send({"message": "SKU code is empty"});
        }else{
            // Set sku_code and move to next function
            res.params.sku_code = req.sanitize(req.body.entry[0].messaging[0].message.text);
            next();
        }
    }
    /* Find item by sku code */
    ,common.findItem
    /* Reply message to Facebook Messanger */
    ,function(req, res, next){
        var options = config.get("facebook");
        var postData = JSON.stringify(res.params.sku);
        options.headers["Content-Length"] = postData.length;

        var data = '';
        var rq = http.request(options, function(rs){
            rs.on('data', function(chunk){ data = data + chunk;});
            
            rs.on('end', function() {
                console.log("Reply OK: "+ data);
            });
        });
        
        rq.on('error', function(e){ console.log(e); });
        
        rq.write(postData);
        rq.end();
    }
);

module.exports = router;
