const strReversing = (str) => {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}
const reversingStr = "javascript";
console.log(strReversing(reversingStr))