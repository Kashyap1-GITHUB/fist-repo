/*
question no 1
var age = Number(prompt("Enter your age vote"))

if (age < 18) {
    console.log("you our minor");
    
    } else if(age >= 18 && age < 60){
        console.log("you our adult");
        
        }else if(age >= 60){
            console.log("you our a senior citizen ");
            
            }
            */

/*
question no 2
var num1 = Number(prompt("Enter your age vote"))
var num2 = Number(prompt("Enter your age vote"))

let sum = num1 + num2  ;

if (sum % 2 == 0) {
    console.log("sum is even");
    
    } else if (sum % 1 == 1){
        console.log("sum is odd");
        
        }
        */

/*
question no 3
var char = prompt("Enter your age vote")
if (char >= 'A' && char <= 'Z') {
console.log("it is Uppercase");

} else if (char >= 'a' && char <= 'z') {
console.log("it is lowercase");

} else {
console.log(" not a latter");

}
*/

/* 
question no 4

let a = prompt("Enter number ")
let b = prompt("Enter number ")
let c = prompt("Enter number ")

if( a > b && a > c){
    console.log('a is gretar :',a);
    }
    else if(b > c && b > a){
        console.log('b is grater :',b);
        }
        else{
            console.log('c is grater',c);
        
    }
    */

/*
question no 5
let year = parseInt(prompt("Enter number "))
 
if( year%400 === 0 ){
 console.log('it is leap year');
 
 }else if(year%4 === 0 && year%100 !== 0){
     
 console.log('it is leap year');
 }
 else{
     console.log("it is not a leap year");
 
}
*/

/*
question no 6

let num1 = parseInt(prompt("Enter number "))
let num2 = parseInt(prompt("Enter number "))

console.log('addtion :',num1 + num2);
console.log('subtraction :',num1 - num2);
console.log('multiplication :',num1 * num2);
console.log('divide :',num1 / num2);
*/

/*
question no 7

let num = parseInt(prompt("Enter number "))

if (num > 0) {
    console.log("number is posetive :",num);
    
    }
    else if(num < 0){
        console.log("number is nagative :",num);
        
        }else{
            
        console.log("number is zero :",num);
        }
        */

/*
question no 8
 
let timeInput = prompt("Enter Time ")
var user = prompt("Enter Name ")
 
let greeting;
 
if (timeInput >= 5 && timeInput  < 12 ) {
console.log("good Morning",user);
 
 
}else if(timeInput >= 12 && timeInput < 17){
    console.log("Good Afternoon",user);
    
    }else if(timeInput >= 17 && timeInput < 21){
        console.log("good Evening",user);
        
        }else  {
            console.log("good Night",user);
        
    }
*/

/*
question no 9

let user = prompt("Enter traffic light Color (Red ,Yellow ,Green) ")

if (user == 'Red') {
    console.log(user,"Stop!");
    }
    else if(user == 'Yellow'){
        console.log(user,"Get Ready!");
        
        }
        else if(user == 'Green'){
            console.log(user,"Go!");
            
            }
            */


/*
question no 10

let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${i*num}`);
    }
    */


/*
 
//    question no 11

let Marks = 80

if (Marks >= 90 && Marks <= 100) {
 console.log(Marks,': A');

}else if(Marks >= 80 && Marks < 90){
 console.log(Marks,': B');
 
 }else if(Marks >= 70 && Marks < 80){
     console.log(Marks,': C');
     
     }else if(Marks >= 60 && Marks < 70){
         console.log(Marks,': D');
         
         }else if(Marks >= 50 && Marks < 60){
             console.log(Marks,': f');
             
}
*/
/*
//    question no 12
 
 
let UserName = "Kashyap"
const Password = 1234;
 
let LoginName = prompt("Enter userName");
let LoginPassword = Number(prompt("Enter Password"));
 
if (UserName == LoginName && Password === LoginPassword ) {
  console.log("LOgin Successful");
  
  }
  else{
      console.log("Incorrect Username or Password");
  
}

*/

/*
//    question no 13

var a = Number(prompt("Enter Number one for swapping"))
var b = Number(prompt("Enter Number two for swapping"))

console.log(`Before swapping Number : a = ${a} , b = ${b}`);

a = a + b;

b = a - b

a = a - b

console.log(`After swapping Number : a = ${a} , b = ${b}`);
*/

/*
//    question no 14

var num = Number(prompt("Enter Number"))

if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
    
    }
    else if (num % 3 == 0 ) {
        console.log("Fizz");
        
        }
        else if (num % 5 == 0 ) {
            console.log("Buzz");
            
            }
            else{
                console.log("the number itself");
            
        }
        */

/*  
  //    question no 15
  
  var num1 = prompt("Enter three digit Number")
  
  console.log(num1);
  
  let result = num1.toString().split('').reverse().join('')
  console.log(result);
  */
 
 /*
 //    question no 16
 
 var num1 = prompt("Enter three digit Number")
 
 let arr = num1.toString().split('')
 let sum = 0
 for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    
    }
    console.log(sum);
    
    */
   
   /*
   //    question no 17
   
   var num1 = prompt("Enter three number")
   
   console.log(num1);
   
   let result = num1.toString().split('').reverse().join('')
   
   console.log(result);
   
   if (num1 === result) {
    console.log("palidrome");
    }else {
        console.log(" not a palidrome");
    
}
*/

/*

//    question no 18

var str = prompt("Enter three number")

let reversel = '';

for (let i = str.length-1 ; i >= 0 ; i-- ) {
    reversel += str[i]
    
    }
    console.log(reversel);
    */
   
   var a = Number(prompt("Enter one number"))
   var b = Number(prompt("Enter two number"))
   var c = Number(prompt("Enter three number"))
   
if(a > b && a < c || a < b && a > c){
    console.log(a,"A is second largest number");
    
}
else if(b > a && b < c || b < a && b > c){
    console.log(b,"B is second largest number");
    
}
else if(c > a && c < b || c < a && c > b){
    console.log(c,"C is second largest number");
    
}