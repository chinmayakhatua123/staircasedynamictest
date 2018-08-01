var assert = require('assert');
var staircasecontroller =  require('../../controllers/staircase.controller.js');

describe('staircasecontroller', function () {

    describe('stepscount', function(){

        it('should return true if ways of path is valid first stiarcase ', function(){
            var count = staircasecontroller.stepscount('0')
            console.log('count of possible ways to reach top  = '+count);
            assert.equal(count, 0);
        });

        it('should return true if ways of path is valid second stiarcase ', function(){
            var count = staircasecontroller.stepscount('1')
            console.log('count of possible ways to reach top  = '+count);
            assert.equal(count, 1);
        });

        it('should return true if ways of path is valid third stiarcase ', function(){
            var count = staircasecontroller.stepscount('2')
            console.log('count of possible ways to reach top  = '+count);
            assert.equal(count, 2);
        });

        it('should return true if ways of path is valid 5th stiarcase ', function(){
            var count = staircasecontroller.stepscount('5')
            console.log('count of possible ways to reach top  = '+count);
            assert.equal(count, 7);
        });

        it('should return true if ways of path is valid with total 20th steps ', function(){
            var count = staircasecontroller.stepscount('20')
            console.log('count of possible ways to reach top  = '+count);
            assert.equal(count, 37);
        });

        it('should not return true value for negative value stiarcase', function(){
            var count = staircasecontroller.stepscount('-1')
            console.log('count of possible ways to reach top  = '+count);
            assert.equal(count, -1);
        });

        it('should not return true value for string value stiarcase ', function(){
            var count = staircasecontroller.stepscount('chinmaya')
            console.log('count of possible ways to reach top = '+count);
        });

    });

});