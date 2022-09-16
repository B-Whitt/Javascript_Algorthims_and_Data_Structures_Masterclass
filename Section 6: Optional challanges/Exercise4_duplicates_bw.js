/*
Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

BW Questions:
- what format is input/ output?
- 

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)

To note:
    - OLD ES5 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    - NEW ES6 -- Rest Parameter -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters 
*/

/* Solution 1 -- Multiple pointers 
function areThereDuplicates(...args) {
    console.log(args);
    let j = 1;
    for (let i in args){
        if (i === j){
            return true;
        } else {
            j++;
        }
    }
}


/* Solution 2 -- Multiple pointers */
function areThereDuplicates(...args){
    let numObj = {};
    console.log(args);
    for (let v of args){
        console.log(v);
        console.log(numObj);
        if (numObj.hasOwnProperty(v)){
            return true;
        } else numObj[v] = 1;
    }
    return false;
}

console.log(areThereDuplicates(2,4,43));













/* Solution 1 
function areThereDuplicates() {
    let collections = {};

    for (let val in arguments){
        collections[arguments[val]] = (collections[arguments[val]] || 0) + 1;
    }
    for (let key in collections){
        if (collections[key] > 1) { // checking if the key appears more than once then do something
            return true;
        }
    }
    return false
}


/* Solution 2 


function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}

*/