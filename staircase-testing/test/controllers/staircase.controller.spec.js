

var assert = require('assert');
var staircasecontroller =  require('../../controllers/staircase.controller.js');

describe('staircasecontroller', function () {

    describe('stepscount', function(){

        it('should validate for 0 steps', function(){
            var count = staircasecontroller.stepscount(0);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 1);
        });

        it('should validate for first step ', function(){
            var count = staircasecontroller.stepscount(1);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 1);
        });

        it('should validate for second steps ', function(){
            var count = staircasecontroller.stepscount(2);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 2);
        });

        it('should validate for third steps ', function(){
            var count = staircasecontroller.stepscount(3);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 3);
        });

        it('should validate for 4th steps ', function(){
            var count = staircasecontroller.stepscount(4);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 5);
        });

        it('should validate for 5th steps ', function(){
            var count = staircasecontroller.stepscount(5);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 8);
        });

        it('should validate for 6th steps ', function(){
            var count = staircasecontroller.stepscount(6);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 13);
        });


        it('should validate for negative value steps', function(){
            var count = staircasecontroller.stepscount(-4);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 0);
        });

        it('should validate for string value steps ', function(){
            var count = staircasecontroller.stepscount('chinmaya');
            console.log('Count of possible ways to reach top = '+count);
            assert.equal(count, 0);
        });

    });

});