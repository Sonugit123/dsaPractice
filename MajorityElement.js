//Leetcode 169. Majority Element

var majorityElement = function(nums) {
    let result = nums[0]
    let count = 0;
    for(let i=0; i<nums.length; i++) {
        if(count === 0) result = nums[i]

        if(nums[i] === result) count++;
        else count--;
    }
    return result;
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))

// Approach 2

var majorityElement2 = function(nums) {
    const limit = Math.floor(nums.length / 2);
    const counts = new Map();
    for (let num of nums) {
        let currentCount = counts.get(num);
        if (currentCount === undefined) {
            currentCount = 0;
        }
        let newCount = currentCount + 1;
        if (newCount > limit) {
            return num;
        }
        counts.set(num, newCount);
    }
};

console.log("approach 2--->", majorityElement2([2,2,1,1,1,2,2]));

// Approach 3

var majorityElement3 = function (nums) {
    let result = null;
    let count = 0;
    for (let num of nums) {
        if (count === 0) {
            result = num;
        }

        if (result === num) {
            count++;
        } else {
            count--;
        }
    }
    return result;
};

console.log("approach 3--->", majorityElement3([2,2,1,1,1,2,2]));