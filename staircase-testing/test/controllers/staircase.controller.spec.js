var assert = require('assert');
var staircasecontroller =  require('../../controllers/staircase.controller.js');

describe('staircasecontroller', function () {

    describe('stepscount', function(){

        it('should return true if ways of path is valid no stiarcase ', function(){
            var count = staircasecontroller.stepscount(0);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 1);
        });

        it('should return true if ways of path is valid first stiarcase ', function(){
            var count = staircasecontroller.stepscount(1);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 1);
        });

        it('should return true if ways of path is valid second stiarcase ', function(){
            var count = staircasecontroller.stepscount(2);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 2);
        });

        it('should return true if ways of path is valid third stiarcase ', function(){
            var count = staircasecontroller.stepscount(3);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 3);
        });

        it('should return true if ways of path is valid 4th stiarcase ', function(){
            var count = staircasecontroller.stepscount(4);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 5);
        });

        it('should return true if ways of path is valid 5th stiarcase ', function(){
            var count = staircasecontroller.stepscount(5);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 8);
        });

        it('should return true if ways of path is valid 6th stiarcase ', function(){
            var count = staircasecontroller.stepscount(6);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 13);
        });


        it('should return false value for negative value stiarcase', function(){
            var count = staircasecontroller.stepscount(-4);
            console.log('Count of possible ways to reach top  = '+count);
            assert.equal(count, 0);
        });

        it('should return false value for string value stiarcase ', function(){
            var count = staircasecontroller.stepscount('chinmaya');
            console.log('Count of possible ways to reach top = '+count);
            assert.equal(count, 0);
        });

    });

});