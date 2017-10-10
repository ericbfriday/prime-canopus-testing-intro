var addOne = require('../src/modules/addOne');
var expect = require('chai').expect;

describe('test for addOne module', function () {
    describe('happy path', function () {
        it('should add one to a the number passed in', function () {    
            expect(addOne(9)).to.equal(10);
        });
        
        it('should return a type number', function() {
            expect(addOne(8)).to.be.a('number');
        });
    });
});