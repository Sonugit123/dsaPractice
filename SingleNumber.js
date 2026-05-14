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

// Approach 2 

var singleNumber = function (nums) {
    // console.log(nums);
    let mySet = new Set();
    for (let num of nums) {
        // console.log(num);
        if (mySet.has(num)) {
            mySet.delete(num);
        } else {
            mySet.add(num);
        }
    }

    return [...mySet][0];
};
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([2,2,1]));
console.log(singleNumber([1]));