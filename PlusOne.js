// Leetcode 66. Plus One
var plusOne = function(digits) {
    for(let i= digits.length - 1; i > -1; i-- ){
        if(digits[i] < 9){
            digits[i] +=1

            return digits;
        }
        digits[i] = 0
    }

    return [1, ...digits]
};

console.log(plusOne([1,2,3]))
console.log(plusOne([9,9,9]))