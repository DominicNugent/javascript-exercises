const repeatString = function(string, repeatNum) {
  if (repeatNum < 0){
    return "ERROR";
  } else {

    let buildString = "";

    for (let i = 0; i < repeatNum; i++) {
        buildString += string;
    }
    return buildString;
  }
};

// Do not edit below this line
module.exports = repeatString;
