
var threeSum = function(nums) {
    // console.log(nums);
    nums.sort((a, b) => a - b);
    // console.log(nums);
    let mySet = new Set();
    let results = [];
    for(let i =0; i < nums.length - 2; i++) {
        console.log(nums[i]);
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                let key = `${nums[i]},${nums[left]},${nums[right]}`;
                if (!mySet.has(key)) {
                    results.push([nums[i], nums[left], nums[right]])
                    mySet.add(key);
                }
                left++;
                right--;
            }
            else if(sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return results;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
