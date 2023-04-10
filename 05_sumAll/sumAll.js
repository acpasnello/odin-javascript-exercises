const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";
    let a;
    let b;
    if (x > y) {
        a = y;
        b = x;
    } else {
        a = x;
        b = y;
    }

    let sum = 0
    for (let i = a;i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
