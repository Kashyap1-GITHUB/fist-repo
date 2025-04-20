// console.log(13<<2);

const PromptSync = require("prompt-sync");

/*
let a = 10 ;
let b = 5;

a = a^b;
b = a^b;
a = a^b;

console.log(a,b);
*/
/*

let n = 32;

console.log((n&1 )=== 0 ?"even":"odd");

*/


var prompt = require('prompt-sync')();
let n = prompt("Eenter number for chack power of two or not :")

if((n&(n-1))=== 0){
    console.log("this number power of 2 :",n);
}
else{
    console.log("not power of 2");

}