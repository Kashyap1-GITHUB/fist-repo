/*
let n = 123;
let sum = 0;
while(n > 0){
    rem = n%10;
    sum += rem;
    n = Math.floor(n/10);
}
console.log(sum);

recurstion

function sumadd(n){
    if(n < 10) return n;
    return (n%10) + sumadd(Math.floor(n/10));
}
let n = 123;
console.log(sumadd(n));

*/
/*
// let n = 123;
// let rev = 0;
// while (n > 0) {
//   rem = n % 10;
//   rev =( rev * 10)+rem;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

function revarse(n,rev){
    if(n == 0 ) return rev;

    return  revarse(Math.floor(n/10),rev*10 + (n%10));
}
let n = 123;

console.log(revarse(n,0));
*/
/*
let a = 20;
let b = 30;

for(let i = Math.min(a,b);i > 0;i--){
    if(a%i===0&& b%i===0){
        console.log(i);
        break
        }
        }
        */
/*
let a = 25;
let b = 34;

while (a != b) {
    if (a > b) a = a - b;
    else b = b - a;
    }
    console.log(a);
    */
/*
   function gcd(a, b) {
    if(a == b ) return a
       if (a > b) return gcd(a - b, b);
       return gcd(a,  b - a);
    }

    let a = 16;
    let b = 24;
console.log(gcd(a, b));
*/

function gcd(a, b) {
    if(b === 0 ) return a
       return gcd(b  ,a%b);
    }
    let a = 46;
    let b = 24;
console.log(gcd(a, b));