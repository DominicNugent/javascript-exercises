const palindromes = function (whatWord) {
    const rawWord = whatWord.toLowerCase();
    const cleanedWord = rawWord.replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');

    console.log (`raw/cleaned and reversed words: ${rawWord}/${cleanedWord}, ${reversedWord}`);

    // Check if the original and reversed words are the same
    return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
// npm test palindromes.spec.js