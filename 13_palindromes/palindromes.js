const palindromes = function (inputString) {
    let letterOnlyString = inputString.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
        return letterOnlyString == letterOnlyString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
