
var groupAnagrams = function(strs) {
const myMap = new Map();
for (let i = 0; i < strs.length; i++) {
    const stringItem = strs[i];
    const myKey = stringItem.split("").sort().join("");
    if (!myMap.has(myKey)) {
        myMap.set(myKey, []);
    }
    const array = myMap.get(myKey);
    array.push(stringItem);
}    
 return Array.from(myMap.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

