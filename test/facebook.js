var client = require(__dirname + '/facebook_client');
var assert = require("assert");
var sleep = require('sleep-async')();
var fs = require('fs');

describe('Receive Facebook Message', function(){
    
    describe('Success', function(){
        it('Test Case S01', function(done){
            var expected_response = {"status": "OK"};
            client(__dirname + '/request/facebook_S01', function(actual_response){
                //Assert response code
                assert.deepEqual(actual_response, expected_response);
                
                //Assert reply message
                sleep.sleep(100, function(){
    	            var expected_reply = require(__dirname + '/reply/facebook_expected');
                    var actual_reply = JSON.parse(fs.readFileSync(__dirname + '/reply/facebook.json'));
                    assert.deepEqual(actual_reply, expected_reply);
                    done();
                });
            });
        });
        
        it('Test Case S02', function(done){
            var expected_response = {"status": "OK"};
            client(__dirname + '/request/facebook_S02', function(actual_response){
                //Assert response code
                assert.deepEqual(actual_response, expected_response);
                
                //Assert reply message
                sleep.sleep(100, function(){
                    var expected_reply = require(__dirname + '/reply/facebook_expected');
                    var actual_reply = JSON.parse(fs.readFileSync(__dirname + '/reply/facebook.json'));
                    assert.deepEqual(actual_reply, expected_reply);
                    done();
                });
            });
        });
        
    });
    
    describe('Error', function(){
        it('Test Case E01', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E01', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E02', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E02', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E03', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E03', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E04', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E04', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E05', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E05', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E06', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E06', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E07', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E07', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E08', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E08', function(actual){
                assert.deepEqual(actual, expected);
                done(); 
            });
        });
        it('Test Case E09', function(done){
            var expected = {"message": "Invalid SKU code"};
            client(__dirname + '/request/facebook_E09', function(actual){
                //Assert response code
                assert.deepEqual(actual, expected);
                done();
            });
        });
        it('Test Case E10', function(done){
            var expected_response = {"status": "OK"};
            client(__dirname + '/request/facebook_E10', function(actual_response){
                //Assert response code
                assert.deepEqual(actual_response, expected_response);
                
                //Assert reply message
                sleep.sleep(100, function(){
                    var expected_reply = {message:"Item is not found"};
                    var actual_reply = JSON.parse(fs.readFileSync(__dirname + '/reply/facebook.json'));
                    assert.deepEqual(actual_reply, expected_reply);
                    done(); 
                });
            });
        });
    });
    
});
