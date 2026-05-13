const obj = {
    1: 2,
    3: 4,
    5: 6
}

const brackets = {
    "(": ")",
    "{": "}",
    "[": "]"
};

console.log(brackets["["]); // for understanding purpose of brackets object working


var isValid = function (inputString) {
    // input string should only have brackets

    const bracketArray = [];
    for (let char of inputString) {
        if (brackets[char]) {
            bracketArray.push(char);
        } else if ( char === ")" || char === "]" || char === "}") {
            const lastOpeningBracket = bracketArray.pop();
            if (brackets[lastOpeningBracket] !== char) {
                return false;
            }
        }
    }
    return bracketArray.length === 0;
};

console.log("()",isValid("()"));
console.log("()[]{}",isValid("()[]{}"));
console.log("(]",isValid("(]"));
console.log("([])",isValid("([])"));
console.log("([)]",isValid("([)]"));
