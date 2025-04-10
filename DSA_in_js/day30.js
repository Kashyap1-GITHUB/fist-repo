// question 1 
/*
let num = 10;

for (let i = 1; i <= num; i++) {
    console.log(i);
    
}
    */

// question 2
/*
let num = 10;

for (let i = num; i >= 1; i--) {
    console.log(i);
}
    */

// question 3 
/*
let num = 14;

let sum = 0;

for (let i = 1; i <= num; i++) {
    sum += i   
}

console.log(sum);
*/

// question 4 
/*
let num = 5;

let facto = 1;

for (let i = 1; i <= num; i++) {
    facto *= i   
}

console.log(facto);
*/

// question 5
/*
let num = 10;
let sumofeven = 0;
let sumofodd = 0;

for (let i = 1; i <=num  ;i++) {
    if(i % 2 === 0) sumofeven += i
    else sumofodd += i    
}
console.log(sumofeven);
console.log(sumofodd);
*/


// question 6
// Print All Factors of a Number
// Write a program that accepts an integer n as input and
// prints all the factors of n.
// A factor of a number is an integer that divides the number
// evenly without leaving a remainder.
// The program should print each factor on a single line,
// space-separated, in ascending order.
/*
let num = 13;

for (let i = 1; i <= num/2; i++) {
    if (num % i ===0 ) {
        console.log(i);
    }
}
console.log(num);   
*/

// question 7
/*
Check if a Number is Prime
Write a program that accepts an integer n as input and
checks whether it is a prime number.
A prime number is a number greater than 1 that has no
positive divisors other than 1 and itself.
• If the number is prime, print "Prime".
• Otherwise, print "Not Prime".



let num = Number(prompt("Enter number"));//73

let numberprime = primenumberfun(num);

if(numberprime) console.log("is prime");
else console.log("not prime");


function primenumberfun(num){
    if(num <= 1) return false;
    if(num == 2) return true;
    if(num % 2 == 0) return false;
  for(let i = 3 ; i <= Math.floor(Math.sqrt(num));i+=2){
    if (num % i == 0) {
        return false;
    }
  }
    return true;
}
    */




