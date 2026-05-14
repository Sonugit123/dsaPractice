// Leetcode 217. Contains Duplicate

// Approach 1 is more optimal as compare to approach 2

var containsDuplicate = function(nums) {
    // validation that nums is an array and contains only numbers

    let mySet = new Set();
    for (const num of nums) {
        if (mySet.has(num)) {
            return true;
        }
        else {
            mySet.add(num);
        }
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

// Approach 2

var containsDuplicate2 = function(nums) {
// validation that nums is an array and contains only numbers

    let mySet = new Set(nums);
    if(nums.length != mySet.size) {
        return true;
    }
    return false;
};

console.log(containsDuplicate2([1,2,3,1]))
console.log(containsDuplicate2([1,2,3,4]))
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]))