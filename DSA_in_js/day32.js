
/*

1. ISBN Number
Description: An ISBN (International Standard Book Number) is a unique 10-digit
number assigned to books. The ISBN is valid if the sum of its digits, each
multiplied by its position (1 to 10), is divisible by 11.


let num1 = 471958697;

let sum = 0;

for(let i = 10 ; i >= 1 ; i--){
   rem = num1 % 10;
   sum += rem  * i ;
   num1 = Math.floor(num1/10)   
}
if (sum % 11 == 0) {
    console.log("Valid ISBN");
}
else console.log("inValid ISBN");

console.log(sum);
*/


/*
2. HCF/GCD
Description: The Highest Common Factor (HCF) or Greatest Common Divisor
(GCD) of two numbers is the largest number that divides both numbers
without leaving a remainder.
Example:
7 Input: a = 12, b = 1,
7 Output: '
7 Explanation: Factors of 12: {1,2,3,4,6,12}, Factors of 18: {1,2,3,6,9,18}.
Common factors: {1,2,3,6}. The highest is 6.
Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b).


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
let a = 12, b = 18;
console.log("GCD of", a, "and", b, "is:", gcd(a, b));
*/
/*
3. Harshad Number
Description: A number is a Harshad number if it is divisible by the sum of its
digits.
let num = 18
let sum = 0;
while(num > 0){
    rem = num % 10;
    sum += rem ;
    num = Math.floor(num/10)  
}
console.log(sum);
*/

/*
// 4. Perfect Square
// Description: A number is a perfect square if it is the square of an integer.

let num = 25;

if(num > 0){
    if(num == Math.pow(Math.sqrt(num),2) ){
        console.log("perfect Square");
    }
    else console.log("not perfect square");
    
}
    */

/*
5. Abundant Number
Description: A number is abundant if the sum of its proper divisors is greater
than the number itself.
Example\
P Input: 1
P Output: Abundant Numbea
P Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).
Hint: Use a loop to find proper divisors.

let num = 12;
let sum = 0;


let i = 1
while( i <= num/2) {
    if (num % i == 0) {
        sum += i;
    }
    i++;
}
if (sum > num ) console.log(sum,": Abundant Numbear");
else console.log(sum ,"not Abundant Numbear");

*/


/*
6. Fibonacci Series using Loop
Description: Print Fibonacci series up to N terms using a loop.
Example/
b Input: N = (
    b Output: 0, 1, 1, 2, 3, 5
    Hint: Use a loop and store previous two numbers.
    
    let n = Number(prompt("Enter number for Fibonacci series "))
    let a = 0;
    let b = 1;

for (let i = 0; i < n; i++) {
   console.log(a);
   let c = a + b;
   a = b;
   b = c ;

}
*/
/*
7. Find Numbers with Exactly X Divisors (Javascript)
Description: Find numbers that have exactly X divisors.
Example/
b Input: X = O
b Output: 4, 9, 25, 4
b Explanation: These numbers have exactly three divisors.
Hint: Use prime factorization.
let x = 2;
n = 7
if (x === x) {
    console.log(Math.pow(2,x));
}

for(let i = 3 ; i <= n; i+=2){
        console.log(Math.pow(i,x));
}

    */
/*

// 8. Prime Factors in Java
// Description: Find all prime factors of a number.
// Example/
//  Input: 30
//  Output: 2, 3, 5
// Hint: Use division method.

let n = 40;

let result = [];

while(n % 2 == 0 ){
    result.push(2);
    n = n / 2;
}

for (let i = 3; i < n; i+=2) {
    while(n % i === 0){
        result.push(i);
        n = n / i;
    }
    
}
if( n > 2 ){
    result.push(n);
}

console.log(result);
*/


// const prompt = require("prompt-sync")();
// const name = prompt("Enter your name: ");
// console.log(`Hello, ${name}!`);


/*
9. Calculate Area using Switch Statement
Description: Find the area of a circle, rectangle, or triangle using switch.
Example(
& Input: Choice = Circle, Radius = M
& Output: Area = 78.5
Hint: Use switch with case statements.

let choice = prompt("Enter circle rectangle triangle").toLowerCase();
let area = 0;

switch (choice) {
    case "c":
        let redius = Number(prompt("Enter redius:"))
        area =Math.PI * Math.pow(redius,2)
        break;

    case "r":
        let length = Number(prompt("Enter length:"))
        let breadth = Number(prompt("Enter breadth:"))
        area = length * breadth
        break;

    case "t":
        let base = Number(prompt("Enter base:"))
        let height = Number(prompt("Enter height:"))
        area = 0.5 * base * height
        break;

    default:
        console.log("plz Enter valide optione");
        break;
}
console.log(area);
*/
/*
10. Neon Number
Description: A number where the sum of digits of its square equals the
number itself.
Example(
& Input: 
& Output: Neon Numbe;
& Explanation: 92 = 81, sum of digits = 9.
Hint: Find square, sum digits, compare.

let n = 9
let copy = Math.pow(n,2)

let sum = 0;

while (copy > 0) {
    rem = copy % 10;
    sum += rem;
    copy = Math.trunc(copy / 10)
}
 
if(n === sum ) console.log("Neon Number");
else console.log("Not Neon Number");

*/
/*
11. Sum of Even Indexed Fibonacci Numbers
Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth
Fibonacci number.
Example(
& Input: N = 
& Output: 33
Hint: Use a loop and maintain a sum for even-indexed elements.
let n = 4;
let cube = n*2
let arr = []
let sum = 0;

let a = 0, b = 1;
while (cube >= 0) {
    arr.push(a)
    let c = a + b;
    a = b;
    b = c;
  cube--
}
console.log(arr);

for (let i = 0; i <= arr.length; i++) {
    if(i % 2 == 0)
        sum += arr[i]
}
console.log(sum);
*/
/*
12. Find the Largest Digit in a Number
Description: Find the largest digit in a given number.
Example5
i Input: 5482.
i Output: 9
Hint: Extract digits using modulo (% 10) and compare.

let n  = 54082;

let max = 0;
while(n > 0){

    if(n > 0 ){
        rem1 = n % 10;
        n = Math.trunc(n/10);
    }
    if(n > 0 ){
        rem2 = n % 10;
        n = Math.trunc(n/10);
    }
    if( rem1 > rem2 && rem1 > max) {
        max = rem1 
    }
    else if(rem2 > rem1 && rem2 > max){
        max = rem2;
    }
    else if(max > rem1 && rem2 < max){
        max = max;
    }
}

console.log(max);

*/
/*
13. Find LCM of Two Numbers
Description: Find the Least Common Multiple (LCM) of two numbers.
Example5
i Input: a = 12, b = 1S
i Output: 60
Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b).
let a = 12
let x = a
let b = 15;
let y = b;



while(b !== 0){
    temp = b 
    b = a % b;
    a = temp;
}

let LCM = (x * y)/a
console.log(LCM);

//formila LCM(a, b) = (a × b) / GCD(a, b).
*/

