function staircasecontroller() {

    function stepscount(totalsteps) {
        if (totalsteps <= 1)
            return totalsteps;
        if (totalsteps < 2)
            return totalsteps;
        if (totalsteps ==2)
            return totalsteps;

        var NoOfWays=  (totalsteps - 1) + (totalsteps - 2);
        return NoOfWays;
    }

    return {
        stepscount
    }

}

module.exports = staircasecontroller();
