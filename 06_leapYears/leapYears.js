const leapYears = function(whatYear) {
    const isDivisibleBy4 = whatYear % 4 === 0;
    const isDivisibleBy100 = whatYear % 100 === 0;
    const isDivisibleBy400 = whatYear % 400 === 0;

    return isDivisibleBy4 && (!isDivisibleBy100 || isDivisibleBy400);

};

// Do not edit below this line
module.exports = leapYears;
//npm test leapYears.spec.js
