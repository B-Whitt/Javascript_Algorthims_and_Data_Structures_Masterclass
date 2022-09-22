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

// var isAnagram = function(s, t) {
//     let objS = {};
//     let objT = {};

//     // verify length of both strings - if they do not match return false
//     if (s.length !== t.length) return false;

//     // iterate str1 to populate objS and number of times of each character
//     if (s.length > 0) {
//         for (let char of s){ 
//             objS[char] = objS[char] + 1 || 1;
//         }
            // iterate str2 to populate objT and number of times of each character
//         for (let char of t){ 
//             objT[char] = objT[char] + 1 || 1;
//         }
//         console.log(objS);
//         console.log(objT);
//         // let valsS = Object.values(objS);
//         for (let char of s){
//             if (objT.hasOwnProperty(char) && objT[char] === objS[char] ){
//                 console.log("Both obj have same key and value: " + char);
                
//             } else {
//                 console.log("Both obj DO NOT have same key and value: " + char);
//                 return false;
//             }
//         } return true;
//     } else console.log("S Length is 0");
    



// Solution #2 iterate str2 and subtract 1 for every value and when a value goes below zero return false
        var isAnagram = function(s, t) {
            let objS = {};
        
            // verify length of both strings - if they do not match return false
            if (s.length !== t.length) return false;
        
            // iterate str1 to populate objS and number of times of each character
            if (s.length > 0) {
                for (let char of s){ 
                    objS[char] = objS[char] + 1 || 1;
                }
                for (let char of t){ 
                    // objT[char] = objT[char] + 1 || 1;
                    if (objS.hasOwnProperty(char) && objS[char] > 0){
                        objS[char] = objS[char] - 1;
                    } else return false;
                }
                return true;
            } 
};

console.log(isAnagram("bar", "cart"));