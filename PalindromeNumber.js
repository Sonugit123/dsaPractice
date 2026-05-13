// Leetcode 9. Palindrome Number

var isPalindrome = function(inputNumber) {
    const reverseString = inputNumber.toString().split("").reverse().join("");
    return reverseString === inputNumber.toString();
}

console.log(109, isPalindrome(109));
console.log(121, isPalindrome(121));
console.log(-121, isPalindrome(-121));

var isPalindromeWithoutStringConversion = function(inputNumber) {
    if (inputNumber < 0) {
        return false;
    }
    if(inputNumber < 10) {
        return true;
    }

    let reverseNumber = 0;
    let digitsLeft = inputNumber;

    while(digitsLeft > 0) {
        const lastDigit = digitsLeft % 10;
        digitsLeft = Math.floor(digitsLeft / 10);
        reverseNumber = reverseNumber * 10 + lastDigit;
    }
    return inputNumber ===reverseNumber;
}

console.log(109, isPalindromeWithoutStringConversion(109));
console.log(121, isPalindromeWithoutStringConversion(121));
console.log(-121, isPalindromeWithoutStringConversion(-121));