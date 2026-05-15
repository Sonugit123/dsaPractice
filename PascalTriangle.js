// Leetcode 118. Pascal's Triangle

var generate = function(numRows) {
    const result = [];
    result.push([1]);
    for (let i = 1; i < numRows; i++) {
        const lastRow = result[i-1];
        const subArray = [];
        for (let j = 0; j <= i; j++) {
            let firstNumber = 0;
            let secondNumber = 0;
            if (lastRow[j - 1]) {
                firstNumber = lastRow[j - 1];
            }
            if (lastRow[j]) {
                secondNumber = lastRow[j];
            }

            const sum = firstNumber + secondNumber;
            subArray.push(sum);
        }
        result.push(subArray);
    }
    return result;
};

console.log(generate(5));