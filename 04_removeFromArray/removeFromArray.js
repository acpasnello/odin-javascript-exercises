const removeFromArray = function(array, ...toRemove) {
    const args = toRemove;
    // const numArgs = toRemove.length();
    let inputArray = array;
    for (const arg of args) {
        let index = inputArray.indexOf(arg)
        if (index != -1) {
            inputArray.splice(index, 1);
        }
    }

    return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;
