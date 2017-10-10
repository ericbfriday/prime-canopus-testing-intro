var expect = require('chai').expect;
var request = require('request');

var url = 'http://localhost:3000/addOne/45';

describe('test main server file app.js', function () {
    // before()
    // after()
    describe('get addOne route', function () {
        it('should add one to number passed as a url param', function (done) {
            request(url, function(err, response, body) {
                // nothing here yet
                // console.log('body -> ', body);
                expect(JSON.parse(body).result).to.equal(46);
                expect(response.statusCode).to.equal(200);
                
                done();
            });
        });
    });
});
