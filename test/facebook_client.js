var http = require('http');

module.exports = function(filename, callback){

    var postData = JSON.stringify(require(filename));
    var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/facebook',
        method: 'POST',
        json:true,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    };

    var data = '';
    var req = http.request(options, function(res){
        res.on('data', function(chunk){ data = data + chunk;});
        
        res.on('end', function() {
            callback(JSON.parse(data));
        });
    });

    req.on('error', function(e){
        callback(e);
    });

    req.write(postData);
    req.end();
}
