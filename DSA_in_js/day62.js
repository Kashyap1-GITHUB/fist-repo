/*
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number :"));
count(n);
function count(n) {
  let Primenum = new Array(n + 1).fill(true);

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (Primenum[i] == true) {
      for (let j = i * i; j <= n; j += i) {
        Primenum[j] = false;
      }
    }
  }

  for (let i = 2; i <= Primenum.length; i++) {
    if (Primenum[i]) process.stdout.write(i + " ");
  }
}
*/

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number :"));
function sqrt(n){
    let i = 1
for( ;i*i<=n;i++){
    if(i*i==n) return i
}
return i-1
}
console.log(sqrt(n));
