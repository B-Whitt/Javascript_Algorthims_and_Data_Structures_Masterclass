/* Count Unique Values
Implement a function called countUniquevalues  which accepts a sorted array and counts the
values in the array, There can be negative numbers in the array they it will always be sorted.
*/


function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {

        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 2]));

/* Time Complexity -  0(N)
*  Space Complexity - 0(1)
* */
