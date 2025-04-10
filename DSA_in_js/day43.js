/*
const prompt = require('prompt-sync')({ sigint: true });

let size = Number(prompt("Enter size:"))
let arr = new Array(size);
let innerarrsize = Number(prompt("Enter innersize:"))

for(let i = 0 ; i < arr.length;i++){
    arr[i] = new Array(innerarrsize);
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt("Enter element:"))
    }
}
console.log(arr);
*/

/*
let mat = [
  [2, 3, 4],
  [3, 4, 5],
  [5, 6, 7],
];

let leftsum = 0,
  right = 0;

for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[i].length; j++) {
    if (i === j) leftsum += mat[i][j];
    else if (i + j == mat.length - 1) right += mat[i][j];
  }
}

console.log(leftsum);
console.log(right);
*/


// jeckd arr

const prompt = require('prompt-sync')({ sigint: true });

let size = Number(prompt("Enter size:"))
let arr = new Array(size);


for(let i = 0 ; i < arr.length;i++){
    let innerarrsize = Number(prompt("Enter innersize:"))
    arr[i] = new Array(innerarrsize);
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt("Enter element:"))
    }
}
console.log(arr);
