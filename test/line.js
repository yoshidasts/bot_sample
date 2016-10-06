var client = require(__dirname + '/line_client');
var assert = require("assert");

describe('Receive LINE Message', function(){
    describe('Success', function(){
        it('Test Case S01', function(done){
            var expected_response = {"status": "OK"};
            client(__dirname + '/request/line_S01', function(actual_response){
                //Assert response code
                assert.deepEqual(expected_response, actual_response);
                
                //Assert reply message
                var expected_reply = require(__dirname + '/reply/line_expected');
                var actual_reply = require(__dirname + '/reply/line');
                assert.deepEqual(expected_reply, actual_reply);
                done();
            });
        });
    });
    
    describe('Error', function(){
        it('Test Case E01', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/line_E01', function(actual){
                assert.deepEqual(expected, actual);
                done();
            });
        });
        
        it('Test Case E02', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/line_E02', function(actual){
                assert.deepEqual(expected, actual);
                done();
            });
        });
        
        it('Test Case E03', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/line_E03', function(actual){
                assert.deepEqual(expected, actual);
                done();
            });
        });
        it('Test Case E04', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/line_E04', function(actual){
                assert.deepEqual(expected, actual);
                done();
            });
        });
        it('Test Case E05', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/line_E05', function(actual){
                assert.deepEqual(expected, actual);
                done();
            });
        });
        it('Test Case E06', function(done){
            var expected = {"message": "Request structure is fault"};
            client(__dirname + '/request/line_E06', function(actual){
                assert.deepEqual(expected, actual);
                done();
            });
        });
   });

});
