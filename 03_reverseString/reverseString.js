const reverseString = function(whatString) {
    let newString = "";
    for (let i = whatString.length - 1; i >= 0; i--) {
        newString += whatString[i];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
//npm test reverseString.spec.js