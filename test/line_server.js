var fs = require('fs');
var express = require('express');
var router = express.Router();

/* Stub server */
router.post('' ,function(req, res, next) {
    fs.writeFile(__dirname + '/reply/line.json', JSON.stringify(req.body), function(err){
        if(err){
            res.send(err);
        }else{
            res.send({"status": "OK"});
        }
    });
});

module.exports = router;
