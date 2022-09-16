

let wArr = Object.values(packageWeights);
let l = wArr.length;
let k = l - 2;
let i = l - 1;
for (let j = l; j > 2; j--){
    if ((wArr[i]) < (wArr[j])) {
        console.log("i < j");
        if ((wArr[i] + wArr[j]) > wArr[k]){
            console.log("i plus j > k");
        }
    }
}
console.log(wArr);
console.log("this is the length: " + l);
console.log("this is the k: " + wArr[k]);
console.log("this is the i: " + wArr[i]);
}

// ==============================

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getHeaviestPackage' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY packageWeights as parameter.
 */

function getHeaviestPackage(packageWeights) {
    // Write your code here
    let wArr = Object.values(packageWeights);
    let l = wArr.length;
    let k = l - 2;
    let i = l - 1;
    for (let j = l; j > 2; j--){
        if ((wArr[i]) < (wArr[j])) {
            console.log("i < j");
            if ((wArr[i] + wArr[j]) > wArr[k]){
                console.log("i plus j > k");
            }
        }
    }
    console.log(wArr);
    console.log("this is the length: " + l);
    console.log("this is the k: " + wArr[k]);
    console.log("this is the i: " + wArr[i]);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const packageWeightsCount = parseInt(readLine().trim(), 10);

    let packageWeights = [];

    for (let i = 0; i < packageWeightsCount; i++) {
        const packageWeightsItem = parseInt(readLine().trim(), 10);
        packageWeights.push(packageWeightsItem);
    }

    const result = getHeaviestPackage(packageWeights);

    ws.write(result + '\n');

    ws.end();
}