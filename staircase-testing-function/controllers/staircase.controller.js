function staircasecontroller() {

    function staircase(number) {
        if (number < 1)
            return 0;
        if (number < 2)
            return 1;
        if (number ==2)
            return 2;

        return staircase(number - 1) + staircase(number -2)
        // return totalways

    }

    return {
        staircase
    }

}

module.exports = staircasecontroller();