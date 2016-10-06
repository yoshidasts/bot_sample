var express = require('express');
var common = require('./common');
var http = require('http');
var router = express.Router();

/* Query Item by LINE Message */
router.post(''
    /* Receive Message */
    ,function(req, res, next) {
        // Verify Input data
        res.params = {};
        if(!req.body || !req.body.events || !req.body.events[0] || !req.body.events[0].message || !req.body.events[0].message.text){
            res.status(400).send({"message": "Request structure is fault"});
        }else if(req.body.events[0].message.text == ''){
            res.status(400).send({"message": "SKU code is empty"});
        }else{
            // Set sku_code and move to next function
            res.params.sku_code = req.body.events[0].message.text;
            next();
        }
    }
    /* Find item by sku code */
    ,common.findItem
    /* Reply message to LINE */
    ,function(req, res, next){
        var postData = JSON.stringify(res.params.sku);
        
        var options = {
            hostname: 'localhost',  //LINE Message Server
            port: 3000,             //LINE Message Port
            path: '/test/line', //LINE Message Path
            method: 'POST',
            json:true,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        };

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
