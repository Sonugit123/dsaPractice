var lengthOfLongestSubstring = function(s) {
    // console.log(s);
    let charMap = new Map();
    let left = 0;
    let longestLength = 0;
    for (let right = 0; right < s.length; right++) {
        // console.log();
        const char = s[right];
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }

        const length = right - left + 1;
        longestLength = Math.max(longestLength, length);
        charMap.set(char, right);
    }

    return longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("a")); // 1