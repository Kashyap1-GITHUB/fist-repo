const prompt = require("prompt-sync")();

let s = prompt("Enter String :");
let arr = new Array(123).fill(0);

for (let i = 0; i < s.length; i++) {
  let escii = s.charCodeAt(i);
  arr[escii] += 1;
}

for (let j = 0; j < arr.length; j++) {
  if (arr[j] > 0) {
    let char = String.fromCharCode(j);
    console.log(char + " : " + arr[j]);
  }
}
