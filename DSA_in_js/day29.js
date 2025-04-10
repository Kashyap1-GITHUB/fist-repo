/*
question 1 Q.Accept two numbers and print the greatest between them
let num1 = 50;
let num2 = 10;

if (num1 > num2) {
    console.log("num1 is greatest",num1);
}
else{
    console.log("num2 is gratest",num2);
    
}
*/

/*
// Q.Accept an integer and check whether it is an even number or odd.

let num = 44;

if(num % 2 === 0){
    console.log("number is even :",num);
}else{
    console.log("number is odd :",num);
}
    */

/*
// Q.Accept name and age from the user. Check if the user is a valid voter or not.

let name = "kashyap";
let age = 18;

if (age >= 18) {
    console.log("you are aligible for vote");
} else {
    console.log("you are not aligible for vote");
}
    */

/*
// Q.Accept three numbers and print the greatest among them

let num1 = -10 ;
let num2 = -50 ;
let num3 = -55 ;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is gretest :",num1);
} else if(num2 > num1 && num2 > num3){
    console.log("num2 is gretest :",num2);
}else if(num3 > num1 && num3 > num2){
    console.log("num3 is gretest :",num3);
}
else{
    console.log("pleaze Enter valide number");
}
    */


// Q.Accept a year and check if it a leap year or not (google to find out what's a leap year)

// let year = Number(prompt("Enetr year "));
// let leefyear = false;

/*
fiest aprouch

if(year % 4 == 0 ){
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            leefyear = true
        } else {
            leefyear = false
        }
    }
    else{
        leefyear = true;
    }
}
else{
    leeftear = false;
}

console.log(leefyear);
*/

/*
if (year % 4 == 0  &&  year % 100 !==0) {
    leefyear = true
}
else if(year % 400 == 0){
    leefyear =true
}
else{
    leefyear = false;
}
    */
// console.log(leefyear);



// Q.Shop discount - Description on Graphic

// let amount = Number(prompt("Enetr Amount "));
/*
first aprouch

if(amount < 5000){
   amount = amount
}else if(amount > 5000 && amount < 7000){
    amount = amount - (amount*5)/100;
    
}else if(amount > 7000 && amount < 9000){
    amount = amount - (amount*10)/100;
   
}else if(amount > 9000){
    amount = amount - (amount*20)/100;
  
}
console.log(amount);
*/
/*
seconde aprouch

discount = 0;

if(amount < 5000) discount = 0
else if(amount > 5000 && amount < 7000) discount = 5
else if(amount > 7000 && amount < 9000) discount = 10
else if(amount > 9000) discount = 20


 console.log(amount - (amount*discount)/100);
 */




//  Q.Bijli Bill - Description on Graphic

// let unit = Number(prompt("Enter unit"))

// let amount = 0;
/*
fiest aouproch
if(unit > 0 && unit < 100){
    amount = unit * 4.2
}else if(unit > 100 && unit <= 200){
    amount = (100*4.2) + (unit -100)*6   
}else if(unit > 200 && unit <= 400){
    amount = (100*4.2) + (100*6) + (unit - 200)*8   
}else if(unit > 400){
    amount = (100*4.2) + (100*6) + (200*8) + (unit - 400)*13   
}
    */


// second aouproch
/*
if (unit > 400) {
    amount  = (unit - 400) *13;
    unit = 400;
}if (unit > 200 && unit <= 400) {
    amount = amount + ((unit - 200)*8)
    unit = 200;
}if (unit >100 && unit <= 200) {
    amount = amount + ((unit - 100)*6)
    unit = 100;
}if (unit >0 && unit <= 100) {
    amount = amount + (100*4.2)
    unit = 0;
}
    */
    
// console.log(amount);

// let x = "hello ";
 
// if (x) {
//     console.log("t");
    
// } else {
//     console.log("f");
    
// }


/*

1. Problem Statement: Indian Currency Notes Breakdown
You need to write a program where the user inputs an amount in Indian
Rupees, and the program should output the number of currency notes
required to make up that amount using the largest denominations first.


let amount = 10234;
let count = 0;
if (amount >= 2000) {
    count = Math.trunc(amount/ 2000);
    amount = amount -(2000*count);
   console.log("R2000 x",count);
}
if (amount >= 500 ) {
    count = Math.trunc(amount/500);
    amount = amount -(500*count);
    console.log("R500 x",count);
}
if (amount >= 200) {
    count = Math.trunc(amount/ 200);
    amount = amount -(200*count);
    console.log("R200 x",count);
}
if (amount >= 100 ) {
    count = Math.trunc(amount/ 100);
    amount = amount -(100*count);
    console.log("R100 x",count);
}
if (amount >= 50 ) {
    count = Math.trunc(amount/ 50);
    amount = amount -(50*count);
    console.log("R50 x",count);
}
if (amount >= 20 ) {
    count = Math.trunc(amount/ 20);
    amount = amount -(20*count);
    console.log("R20 x",count);
}
if (amount >= 10 ) {
    count = Math.trunc(amount/ 10);
    amount = amount -(10*count);
    console.log("R10 x",count);
}
if (amount >= 5 ) {
    count = Math.trunc(amount/ 5);
    amount = amount -(5*count);
    console.log("R5 x",count);
}
if (amount >= 2 ) {
    count = Math.trunc(amount/ 2);
    amount = amount - (2*count);
    console.log("R2 x",count);
}
if (amount >= 1 ) {
    count = Math.trunc(amount/ 1);
    amount = amount -(1*count);
    console.log("R1 x",count);
}

*/
