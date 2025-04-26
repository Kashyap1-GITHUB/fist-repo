const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number:"))

// function temp(n){
//     if(n==1) return 1;
//     return n + temp(n-1)
// }
// console.log(temp(n));

/*
let fist = 0 ;
let seconde = 1;
process.stdout.write(fist+" "+seconde+" ");
for(let i = 0 ;i < n-2 ;i++){
    let third = fist + seconde;
   process.stdout.write(third+" ");
    fist = seconde
    seconde = third

}
    */
/*
function temp(n,fist,sec){
if(n==0) return;
let third = fist + sec;
process.stdout.write(third+" ");
temp(n-1,sec,third)
}

let fist = 0;
let sec = 1;
process.stdout.write(fist+" "+sec+" ")
temp(n-2,fist,sec)
*/
/*
let first = 0, second = 1;
let third = 0;
process.stdout.write(first+" "+second+" ");

function printFibonacci(n) {
      if(n === 0) {
          console.log()
          return;
      } else {    
          third = first + second;
          process.stdout.write(third+" ")
          first = second;
          second = third
          printFibonacci(n-1);
      }
}
  
printFibonacci(n-2);
  
*/
function fibo(n){
    if(n == 0) return 0
    if(n == 1) return 1
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(n));
