/*
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
  */

const prompt = require("prompt-sync")();

let s1 = prompt("Enter String one:");
let s2 = prompt("Enter String two:");
let arr = new Array(123).fill(0);
let Anagaram = true

if(s1.length != s2.length){
    console.log("this String is not Anagaram");
}
else{
    
for (let i = 0; i < s1.length; i++) {
    let escii1 = s1.charCodeAt(i);
    arr[escii1] += 1;
  }
  
  for (let i = 0; i < s2.length; i++) {
    let escii2 = s2.charCodeAt(i);
    arr[escii2] -= 1;
  }
  
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      Anagaram = false
      break;
    }
  }
  
  if(Anagaram) console.log("this String is Anagaram");
  else console.log("this String is Not Anagaram");
}


