const sumAll = function(lowEndInt, highEndInt) {

    if (lowEndInt > highEndInt) {
        let tempNum = lowEndInt;
        lowEndInt = highEndInt;
        highEndInt = tempNum;
    }
    let sumAllInt = 0;

    if (!Number.isInteger(lowEndInt) || !Number.isInteger(highEndInt)) return 'ERROR';
    if (lowEndInt < 0 || highEndInt < 0) return 'ERROR';
    

    do {
        sumAllInt += lowEndInt;
        lowEndInt++;
    } while (lowEndInt <= highEndInt);

    return sumAllInt;
    
};

// Do not edit below this line
module.exports = sumAll;
// npm test sumAll.spec.js