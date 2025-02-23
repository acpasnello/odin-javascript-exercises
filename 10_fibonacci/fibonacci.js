const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (count === 0) return 0;
    // While length of array <= requested index, generate next value
    let array = [1, 1];
    while (array.length <= num) {
        array.push(array[array.length-1] + array[array.length-2]);
    }
    return array[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
