// for(let i = 1 ; i <= 5 ; i++ ){
    
//     for(let j =1 ; j <= i ; j++){
//         process.stdout.write("*");           
//     }
//     console.log();
    
//    }

// let z = 5
// const prompt = require("prompt-sync")();
// const n = Number(prompt("Enter your Number: "));
// let n = 5
// for(let i = 1 ; i <= n ; i++ ){
    
//     for(let j =1 ; j <= n-i+1 ; j++){
//         process.stdout.write(" * ");   
//     }
    
//     console.log();
//    }


// let n =  prompt = require("prompt-sync")();
// const n = Number(prompt("Enter your Number: "));

// for(let i = 1 ; i <= n ; i++ ){
//     let count = 65;
//     for(let j =1 ; j <= i ; j++){
//         process.stdout.write(String.fromCharCode(count)+" ");           
//         count++
//     }
//     console.log();
    
//    }

let  prompt = require("prompt-sync")();
const n = Number(prompt("Enter your Number: "));

// for(let i = 1 ; i <= n ; i++){
//   for(let j = 1 ; j <= n-i ; j++){
//     process.stdout.write(" ");
//   }
//   for(let j = 1 ; j <= i ; j++){
//     process.stdout.write("* ");
//   }
//   console.log();
  
// }


// for(let i = 1 ; i <= n ; i++){
//   for(let j = 1 ; j <= n ; j++){

//     if(i==j || i+j == n+1){
//       process.stdout.write("*");
//     }
//     else{
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
  
// }

for(let i = 1 ; i <= n ; i++){
  for(let j = 1 ; j <= (n*2)-1 ; j++){

    if(i==j || i+j == n*2){
      process.stdout.write("*");
    }
    else{
      process.stdout.write(" ");
    }
  }
  console.log();
  
}