const secondSmallest = (arr) => {
    let smallest = Infinity;
    let secondLastSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondLastSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondLastSmallest && arr[i] !== smallest) {
            secondLastSmallest = arr[i];
        }
    }

    return secondLastSmallest;
}

const arr = [5, 6, 7, 9, 2, 1, 4, 8];
console.log(`Output is ${secondSmallest(arr)}`);