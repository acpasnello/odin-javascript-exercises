const reverseString = function(string) {
    let reverse = [];
    for (let i = string.length-1;i >= 0;i--) {
        reverse.push(string[i]);
    }
    reverse = reverse.join("");

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
