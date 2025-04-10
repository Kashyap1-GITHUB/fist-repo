// question 1 using while loop
/*

Q.sum of digit

let n = Number(prompt("Enter number :"))//184
let sum = 0;
while(n > 0){
    sum += (n % 10)
    n = Math.floor(n / 10)
}

console.log(sum);
*/

// Q.reverse of number
/*

let n = Number(prompt("Enter number :"))//184

let rev = 0 ;

while(n > 0){
    rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(n / 10);
}
console.log(rev);
*/

// question 3
/*
let n = Number(prompt("Enter number :"))//184
copy = n;
sqrt = n * n;
count = 0;

while(n>0){
    count++;
    n = Math.floor( n / 10)
}

console.log(count);

if(sqrt%Math.pow(10,count) == copy) console.log("Automorphic number");
else console.log("not Automorphic number");
*/
/*
let i = 1;

while(true){
    console.log(i);
    i++;
    if(i > 3){
        break;
    }
}
*/
/*
question strong number 
let  prompt = require("prompt-sync")();
let  n = Number(prompt("Enter your size: "));
let copy = n;
let sum = 0;

while (n > 0) {
    rem = n % 10;
    fact = 1;
    for (let i = 1; i <= rem; i++) {
        fact = i * fact;
    }
    sum += fact;
    n = Math.floor(n / 10);
}

if(copy == sum) console.log("strong number",sum);
else console.log("not strong");
*/
