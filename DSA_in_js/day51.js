/*
const Prompt = require("prompt-sync")();

let Str = Prompt("Enter String:");
let ispalidrom = false;
let i = 0 , j = Str.length-1
while(i<j){
    if(Str[i] === Str[j]){
        ispalidrom = true;
        break
    }
    i++;
    j--;
}

if(ispalidrom) console.log(Str+" is palidrom");
else console.log(Str+" is not palidrom");
*/

const Prompt = require("prompt-sync")();

let Str = Prompt("Enter a String:");
console.log(Str);

let ans = "";

for (let i = 0; i < Str.length; i++) {
  let ascii = Str.charCodeAt(i);
  
  if (ascii >= 65 && ascii <= 90) {
    ans = ans + String.fromCharCode(ascii + 32);
  }
  else if(ascii >=97 && ascii <=122 ){
    ans = ans + String.fromCharCode(ascii - 32); 
  }
}
console.log(ans);
