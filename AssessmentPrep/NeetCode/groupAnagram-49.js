/*
49. Group Anagrams -- Medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
*/

var groupAnagrams = function(strs) {
    // loop
    // populate obj with str1
    let obj1 = {};
    // let obj2 = {};
    let grpArr = [];
    let j = "test";
    for (let i in strs){
        j = strs[i + 1];
        console.log(strs[i + 1]);
        for (let char of strs[i]){
            obj1[char] = obj1[char] + 1 || 1;
            //console.log(obj1);
        }
        
        // if (obj1.hasOwnProperty()){

        // }
    }
    // compare to each, is annagram move to new array


    // Input: strs = ["eat","tea","tan","ate","nat","bat"]
    // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
};

console.log(groupAnagrams(["cat", "dog", "god", "tac", "mouse"]));