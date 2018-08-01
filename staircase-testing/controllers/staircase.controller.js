
function staircasecontroller() {


    function isInteger(num) {
        return num % 1 === 0;
    }

    function fibonacci(steps) {
        if (steps <= 1) {
            return steps;
        }
        return fibonacci(steps - 1) + fibonacci(steps - 2);
    }

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


