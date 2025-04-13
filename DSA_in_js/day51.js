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
/*
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
*/

/*
let Str = ["Stading","Station","Stpotion","Statarwr"];

let s = "St";
let count = 0
for(let i =0 ; i < Str.length;i++){
  if (Str[i].startsWith(s)) {
    count ++;
  }
}
console.log(count);
*/

/*
let String1 = "kashyap apple bol dol";

let Str = String1.split(" ");

for (let i = 0; i < Str.length; i++) {
  
}

console.log(Str);
*/
/*
let string1 = "bhai kya kar rha hai";

let Str = string1.split(" ");

let ans = "";

for (let i = 0; i < Str.length; i++) {
  let word = Str[i];
  if (word.length <= 2) {
    ans += word.toUpperCase();
  } else {
    ans +=
      word.charAt(0).toUpperCase() +
      word.slice(1, word.length - 1) +
      word.charAt(word.length - 1).toUpperCase() +
      " ";
  }
}
console.log(ans);
*/

let string1 = "bhai kya kar rha hai";

let arr = string1.split(" ")
let modifideword = []

for(let i =0 ; i<arr.length ; i++){
  let word = arr[i];
  if(word.length <= 2){
    modifideword.push(word.toUpperCase());
  }
  else{
    let fistword = word.charAt(0).toUpperCase();
    let secondword = word.slice(1,word.length-1);
    let thirdeword = word.charAt(word.length-1).toUpperCase();
    modifideword.push(fistword+secondword+thirdeword);
  }
}
console.log(modifideword.join());
