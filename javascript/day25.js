/* 1. Repeating a Function at Intervals (Using Callbacks)
 Concept:
 A callback function is a function passed as an argument to another
 function. Using setInterval, we can execute a callback function repeatedly
 at specified intervals.
*/

/* function repeat(fun){
setInterval(fun , 2000)
}

repeat(function(){
    console.log("hey");
})
    */

/*


2. Creating a Function with a Preset Greeting (Using Closures)
Concept:
A closure allows a function to "remember" variables from its outer scope
even after the outer function has finished executing.
Implementation:
*/
/*
function greeting(greet){
    return function (name){
        console.log(`${greet} ${name}`);
    }
}

let greeting2 = greeting("Namesty")
greeting2("kashyap")
greeting2("rahul")


let america = greeting("Nice to mite you")
america("sandip");
*/


/*
3. Executing a Function Only Once (Using HOFs + Closures)
Concept:
A function should only be executed once, no matter how many times it is
called.
*/

/*
function only(fun){
let execution = false;
return function(){
    if (!execution) {
        execution = true;
        fun();
    }
    else{
        console.log("limit expire");
    }
}
}

let limit = only(function(){
    console.log("heyyyyy");
})

limit()
limit()
limit()
limit()

*/

/*
4. Throttling a Function (Using HOFs + Closures)
Concept:
Throttling ensures that a function is not executed more than once within a
specified time period. This is useful in event listeners to improve
performance.
*/


// function Throttling(delay , fun ){
//     let lastcall = 0

    
//     return function(){
//         let current = Date.now();
        
//         if (current - lastcall >= delay) {
//             lastcall = current;
//             fun();
//         }
        
        
        
//     }
// }


// let fun2 = Throttling(2000,function(){
//     console.log("chalega two seconde bad");
// })


// fun2()

