/* Count Unique Values
Implement a function called countUniquevalues  which accepts a sorted array and counts the unique
values in the array. There can be negative numbers in the array they it will always be sorted.

BW Notes:
- In solving this problem what questions would I ask?
1 - by unique do you mean numbers that only exist 1 time or only count a number 1 time?
2 - what should the output be? T/F, array of unique values?

*/

// This is the solution that I came up with NOT using the recommended 'Multiple Pointer' pattern
function countUniqueValues(arr) {
    // crate empty object
    let obj = {};
    // iterate over array - if value is not in array add to object
    for (let num of arr){
        //console.log("this is num: " + num);
        if (!obj.hasOwnProperty(num)){
            obj[num] = 1;
        };
        // console.log("These are your Keys: " + obj.keys); -- Did not work
        // console.log("This is obj: " + obj) -- Did not work
        // console.log("These are your Keys: " + Object.keys(obj));
    };
    // print unique values/ object keys
    return console.log("These are your Keys: " + Object.keys(obj));
}







countUniqueValues([1, 11, 1, 17, 2, 2, 5, 5, 3, 8]);
// console.log(countUniqueValues([1, 1, 1, 1, 2, 2]));

/* Time Complexity - O(n)
*  Space Complexity - 
* */
