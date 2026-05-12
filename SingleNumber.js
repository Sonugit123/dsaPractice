//Leetcode 136. Single Number

var singleNumber = function(nums) {
    let uniqueNumber = 0;

    for (let num of nums) {
        uniqueNumber ^= num;
    }

    return uniqueNumber;
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))