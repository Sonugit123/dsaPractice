// Leetcode 724. Pivot Index

var pivotIndex = function(nums) {
    // Validation that nums is really an array of integers
    let leftSum = 0;
    let rightSum = nums.reduce(
        (accumulator, currentValue)=> accumulator + currentValue,
        0
    );

    console.log(nums, leftSum, rightSum);

    for(let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        rightSum = rightSum - nums[i];
        if(leftSum === rightSum) {
            return i;
        }

        leftSum = leftSum + nums[i];
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));