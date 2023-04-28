const findTheOldest = function(people) {
    let oldest = people.reduce((previousValue, currentValue) => {
        // Calculate age of current and previous
        let currentAge = currentValue.yearOfDeath ? currentValue.yearOfDeath-currentValue.yearOfBirth : new Date().getFullYear() - currentValue.yearOfBirth;
        let previousAge = previousValue.yearOfDeath ? previousValue.yearOfDeath-previousValue.yearOfBirth : new Date().getFullYear() - previousValue.yearOfBirth;
        // Compare ages, assign older to 
        let result = currentAge > previousAge ? currentValue : previousValue;
        return result
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
