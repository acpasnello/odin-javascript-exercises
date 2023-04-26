const { check } = require("@primer/octicons");

const palindromes = function (string) {
    let length = string.length;
    let lastChar = length-1;
    for (let i = 0;i <= lastChar;i++) {
        while (checkPunctuation(string.charCodeAt(i))) {
            i++;
        }
        while (checkPunctuation(string.charCodeAt(lastChar))) {
            lastChar--;
        }
        if (string.toLowerCase().charCodeAt(i) != string.toLowerCase().charCodeAt(lastChar)) {
            return false;
        } else {
            lastChar--;
            continue;
        }
    }
    return true;
};

function checkPunctuation(char) {
    if ((char < 65 || char > 122) || (char >= 91 && char <= 96)) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
