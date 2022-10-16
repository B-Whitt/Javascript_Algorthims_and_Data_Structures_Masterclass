/* 
347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    // how many times does each item appear in array
    // use counter obj to get the top k

    let objCount = {};
    let objTopK = {};
    for(let j=1; j<=k; j++){
        objTopK[j] = 0;
        console.log(objTopK, 'objTopK');
    }

    for(let n of nums){
        objCount[n] = objCount[n] + 1 || 1;
        console.log('this is n: ', n);
    }
    
    let keysArr = Object.keys(objCount);
    for(let iKey of keysArr){
        // figure out the key with the top k (2) values
        if(objCount[iKey] > objTopK[1]){
            objTopK[1] = iKey;
        } 
    }

    console.log(objTopK, 'objTopK');
    
    

    
    console.log(objCount, "objCount");
    console.log(keysArr, "keysArr");

};

console.log(topKFrequent([1,1,1,2,2,2,2,4,7,7,7,9], 2));