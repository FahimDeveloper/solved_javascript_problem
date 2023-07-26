const targetIndices = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
}

const inputArray = [2, 3, 1, 6, 8, 15];
const targetValue = 9;
const result = targetIndices(inputArray, targetValue);
console.log(`Example Output: ${result}`);
