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
    valueA = valueA.toString().split('');
    // console.log(valueA);
    valueB = valueB.toString().split('');
    // console.log(typeof(valueA));
    if (valueA.length !== valueB.length){
        return false;
    } // else console.log("The values are the same length!")
    // console.log(valueA.toString().length);
    // console.log(valueB.toString().length);
    // if they do have the same char counts then check if one value exist in another    
        // create 2 object to hold char count of each value
    valAobj = {};
    valBobj = {};
    // iterate each value sparately to count the fequncy of each int in value
    // Compare Method # 1
    
    // for(let int in valueA){
    //     if (valAobj.hasOwnProperty(valueA[int])){
    //         console.log("I have the same value" + valueA[int]);
    //     } else console.log("I DON'T have the same value" + valueA[int]);
    // }
    for(let int of valueA){
        if (valAobj.hasOwnProperty(int)){
            valAobj[int] = valAobj[int] + 1;
            // console.log(valAobj[int]);
            // console.log("I have the same value: " + int);
            // console.log(int);
            console.log(valAobj);
        } else {
            valAobj[int] = 1;
            // console.log("I DON'T have the same value: " + int);
            // console.log(valAobj[int]);
            // console.log(int);
            console.log(valAobj);
        };
    }
        // Compare 2 - during iteration of valB compare to obj of valA, if key exists subtract 1 from value
            // if any value of objA is not Zero the frequency does not match, return false
}

console.log("***************************");
console.log("***************************");
console.log('1', sameFrequency(771, 777));
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