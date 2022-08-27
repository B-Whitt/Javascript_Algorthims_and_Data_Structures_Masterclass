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
    // if they do have the same char counts then check if one value exist in another    
        // 
    
}

console.log('1', sameFrequency(22, 222));
console.log('2', sameFrequency(182, 281));
console.log('3', sameFrequency(34, 14));



/*
if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;

for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

*/