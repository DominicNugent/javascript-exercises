const removeFromArray = function() {
    const argsArray = Array.from(arguments);
    console.log (`source array: ${argsArray}`);
    let sourceArray = argsArray.shift();
    console.log (`look to remove: ${argsArray} from ${sourceArray}`);

    for (const thisElement of argsArray) {
        do {
            let itemIndex = sourceArray.indexOf(thisElement);
            console.log(`array search: found item/index: ${thisElement} / ${itemIndex}`);

            itemIndex >= 0 && sourceArray.splice(itemIndex, 1);
        } while (sourceArray.includes(thisElement));
    }

    return sourceArray;
};

// Do not edit below this line
module.exports = removeFromArray;
//npm test removeFromArray.spec.js
