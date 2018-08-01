
function staircasecontroller() {

// This function will vallidate for integer
    function isInteger(num) {
        return num % 1 === 0;
    }

// This function will vallidate fibbonacci sequence
    function fibonacci(steps) {
        if (steps <= 1) {
            return steps;
        }
        return fibonacci(steps - 1) + fibonacci(steps - 2);
    }

//  This below function will vallidate totoal number of ways to reach top of the staircase
    function stepscount(totalsteps) {

        if (!isInteger(totalsteps) || totalsteps < 0)
            return 0;

        return fibonacci(totalsteps + 1);
    }

    return {
        stepscount
    }
}

module.exports = staircasecontroller();


