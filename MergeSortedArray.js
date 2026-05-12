// Leetcode 88. Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
    let combinedArrayCurrentIndex = m + n - 1;
    let nums1CurrentIndex = m - 1;
    let nums2CurrentIndex = n - 1;
    while (nums2CurrentIndex >= 0) {
        if(
            nums1CurrentIndex >= 0 &&
            nums1[nums1CurrentIndex] > nums2[nums2CurrentIndex] 
        ) {
            nums1[combinedArrayCurrentIndex] = nums1[nums1CurrentIndex];
            nums1CurrentIndex--;
        } else {
            nums1[combinedArrayCurrentIndex] = nums2[nums2CurrentIndex];
            nums2CurrentIndex--;
        }
        combinedArrayCurrentIndex--;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));