/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

Follow up: 
    - What if the inputs contain Unicode characters? 
    - How would you adapt your solution to such a case?
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* BW Questions:
-  

*/

var isAnagram = function(s, t) {
    let obj1 = {};
    let obj2 = {};
    // verify length of both strings - if they do not match return false
    // console.log(s.length);
    if (s.length !== t.length) return false;
    // iterate str1 to populate obj1 and number of times of each character
    if (s.length > 0) {
        for (let char of s){ 
            obj1[char] = obj1[char] + 1 || 1;
        }
        for (let char of t){ 
            obj2[char] = obj2[char] + 1 || 1;
        }
        console.log(obj1);
        console.log(obj2);
        let vals = Object.values(obj1);
        for (let v of vals)
    }
    
    // iterate str2 to populate obj2 and number of times of each character
    // compare values
        // or iterate str2 and subtract 1 for every value and when a value goes below zero return false


};

console.log(isAnagram("bar", "cart"));