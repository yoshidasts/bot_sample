var client = require(__dirname + '/facebook_client');
var assert = require("assert");

describe('Receive Facebook Message', function(){
    
    describe('Success', function(){
        it('Test Case S01', function(done){
            var expected_response = {"status": "OK"};
            client(__dirname + '/request/facebook_S01', function(actual_response){
                //Assert response code
                assert.deepEqual(expected_response, actual_response);
                
                //Assert reply message
                var expected_reply = require(__dirname + '/reply/facebook_expected');
                var actual_reply = require(__dirname + '/reply/facebook');
                assert.deepEqual(expected_reply, actual_reply);
                done();
            });
        });
    });
    
    describe('Error', function(){
        it('Test Case E01', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E01', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
        it('Test Case E02', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E02', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
        it('Test Case E03', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E03', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
        it('Test Case E04', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E04', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
        it('Test Case E05', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E05', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
        it('Test Case E06', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E06', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
        it('Test Case E07', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E07', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
        it('Test Case E08', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/facebook_E08', function(actual){
                assert.deepEqual(expected, actual);
                done(); 
            });
        });
   });

});
