/*
Frequency Counter - 
Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities: Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

BW Questions:
- Do i understand the problem?
- What is the output format? Boolean


*/

function sameFrequency(valueA, valueB) {
    // if the number of characters of valueA or valueB don't match return false
    // let sameLength = (valueA.toString().length === valueB.toString().length) ? true : false;
    valueA = valueA.toString().split(''); // WIL'd -- int > str > array
    // console.log(valueA);
    valueB = valueB.toString().split('');
    // console.log(typeof(valueA));
    if (valueA.length !== valueB.length){
        return false;
    } 
    
    // if they do have the same char counts then check if one value exist in another    
        // create 2 object to hold char count of each value
    let valAobj = {};
    
    // iterate each value sparately to count the fequncy of each int in value
    for(let i of valueA){
        valAobj[i] = (valAobj[i] || 0)+ 1;
        
        // if (valAobj.hasOwnProperty(i)){
        //     valAobj[i] = valAobj[i] + 1;
        // } else {
        //     valAobj[i] = 1;
        // };
    }
    // Compare - during iteration of valB compare to obj of valA, if key exists subtract 1 from value
        // if any value of objA is not Zero the frequency does not match, return false
    for(let j of valueB){
        if(valAobj.hasOwnProperty(j) && (valAobj[j] > 0)){
            valAobj[j] = valAobj[j] - 1;
        } else return false
    }  
    return true
}

console.log("***************************");
console.log("***************************");
console.log('1', sameFrequency(771, 776));
console.log("***************************");
console.log('2', sameFrequency(9829, 2899));
console.log("***************************");
console.log('3', sameFrequency(344, 434));



/*
if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;

for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

*/