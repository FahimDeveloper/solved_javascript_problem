const mostFrequent = (arr) => {
    const frequentObj = arr.reduce((obj, element) => {
        obj[element] = (obj[element] || 0) + 1;
        return obj
    }, {});
    let mostFrequentElement;
    let maxFrequent = 0;
    for (const element in frequentObj) {
        if (frequentObj[element] > maxFrequent) {
            maxFrequent = frequentObj[element];
            mostFrequentElement = element
        }
    }
    return mostFrequentElement
}

const array = [7, 2, 3, 2, 2, 4, 4, 5, 4];
console.log(`Most frequent element: ${mostFrequent(array)}`);
