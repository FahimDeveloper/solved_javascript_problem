const sumOfArrValues = (arr) => {
    let sum = 0;
    for (num of arr) {
        sum += num
    }
    return sum
}
const numArr = [2, 3, -4, 10, -7, 8];
console.log(`Out put is ${sumOfArrValues(numArr)}`)
