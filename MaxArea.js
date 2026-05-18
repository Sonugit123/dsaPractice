// Leetcode 11. Container With Most Water

var maxArea = function (arr) {
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;
  let bestArea = 0;
  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    let area = height * width;
    bestArea = Math.max(bestArea, area);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return bestArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
