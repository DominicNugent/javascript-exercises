const fibonacci = function(term) {
    term = parseFloat(term); // Convert to a floating-point number
    console.log("starting with: " + term);
    
    if (isNaN(term)) {
        return "OOPS"; // erroneous input
    } else if (term === 0) {
        return 0;
    } else if (term < 0) {
        return "OOPS";
    } else if (term === 1) {
        return 1;
    } else if (term === 2) {
        return 1;
    }

    let lastNumber = 1;
    let secondLastNumber = 1;

    for (let i = 3; i <= term; i++) {
        const nextNumber = lastNumber + secondLastNumber;
        secondLastNumber = lastNumber;
        lastNumber = nextNumber;
    }

    console.log("last num calculated: " + lastNumber);

    return lastNumber;
};

// Do not edit below this line
module.exports = fibonacci;
// npm test fibonacci.spec.js
