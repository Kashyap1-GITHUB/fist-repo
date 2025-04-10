

// question 1 A function can accept another function as an argument (callback) and
// execute it after a delay using setTimeout.

// function set(fun){
//     setTimeout(fun ,2000)
// }


// set(function(){
//     console.log("heyy");
// })



// question 2 The .map() method is used to transform an array by applying a callback
// function to each element. We can create our own version of .map().

// let val = map(arr ,function(val){
// return Value + 2;
// })

// let array = [2, 14, 5, 2, 4, 66, 32]

// function copymap(arr, fun) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(fun(arr[i]))
//     }
//     return arr2;
// }


// console.log(copymap(array, function (val) {
//     return val * 2;
// }));


// question 3 Creating a Counter Function


// function counter(){
//     let score = 0;

//     return function(){
//         score++;
//         console.log(score);        
//     }
// }

// let count = counter()
// count();


// question 4 Limiting Function Calls (Closure + HOF)


// function limittar(limit ,fun){
      
//     let score = 0
//     return function(){
//         if(limit >= score){
//             score++
//             fun();
//         }
//         else{
//             console.log("trey again");
//         }
//     }
// }

// let result = limittar(3,function(){
//     console.log("heyy");
// })

// result()
// result()
// result()
// result()
// result()
