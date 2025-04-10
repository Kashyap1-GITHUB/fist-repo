/*
Accept value from user and assign in the array

let  prompt = require("prompt-sync")();
const n = Number(prompt("Enter your size: "));

let arr = new Array(n);

for(let i = 0 ; i < arr.length;i++){
    arr[i] = Number(prompt("Enter your Number: "));
}
console.log(arr);
*/

/*
 Q 23. Sum of array’s element

let  prompt = require("prompt-sync")();
const n = Number(prompt("Enter your size: "));

let arr = new Array(n);
let sum = 0;
for(let i = 0 ; i < arr.length;i++){
    arr[i] = Number(prompt("Enter your Number: "));
    sum += arr[i]
}
console.log(sum);
*/
/*
// Q 24. Max element from array

let arr = [10,57,52,582,4,5,52]
let max = arr[0];

for(let i = 0 ; i < arr.length; i++){
    // arr[i] = Number(prompt("Enter your Number: "));
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max);
*/

/*
// Q 24. min element from array

let arr = [10,57,52,582,4,5,52]
let min = arr[0];

for(let i = 0 ; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i]
    }
}

console.log(min);
*/
/*
question 1
let n = 5;
let arr = [1,2,3,4,5]
let sum = 0;

for(let i = 0 ; i < arr.length; i++){
    sum += arr[i];
}

let mean = (sum / n).toFixed(1);

console.log(mean);
*/