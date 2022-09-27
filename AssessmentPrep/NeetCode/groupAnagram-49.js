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
    // for (let i in strs){
    for (let i=0; i <= strs.length -1; i++){
        console.log('i is: ' + i);      
        let word = strs[i];
        for (let idx=0; idx <= (word.length - 1); idx++){
            console.log('word is: ' + word);
            obj1[word[idx]] = obj1[word[idx]] + 1 || 1;
            console.log(obj1);
        }
        obj1 = {};
        
        // if (obj1.hasOwnProperty()){}
    }
    // compare to each, is annagram move to new array


    // Input: strs = ["eat","tea","tan","ate","nat","bat"]
    // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
};

console.log(groupAnagrams(["cat", "dog", "god", "tac", "mouse"]));