/*
const prompt = require("prompt-sync")();

let s = prompt("Enter String :");
let arr = new Array(123).fill(0);

for (let i = 0; i < s.length; i++) {
  let escii = s.charCodeAt(i);
  arr[escii] += 1;
}

for (let j = 0; j < arr.length; j++) {
  if (arr[j] > 0) {
    let char = String.fromCharCode(j);
    console.log(char + " : " + arr[j]);
  }
}
*/


/*
const prompt = require("prompt-sync")();

let s1 = prompt("Enter String one:");
let s2 = prompt("Enter String two:");
let arr = new Array(123).fill(0);
let Anagaram = true

if(s1.length != s2.length){
    console.log("this String is not Anagaram");
}
else{
    
for (let i = 0; i < s1.length; i++) {
    let escii1 = s1.charCodeAt(i);
    arr[escii1] += 1;
  }
  
  for (let i = 0; i < s2.length; i++) {
    let escii2 = s2.charCodeAt(i);
    arr[escii2] -= 1;
  }
  
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      Anagaram = false
      break;
    }
  }
  
  if(Anagaram) console.log("this String is Anagaram");
  else console.log("this String is Not Anagaram");
}

*/

/*
// Example: console.log(isAnagram("arc", "car")); // true console.log(isAnagram("state", "taste"));// true console.log(isAnagram("night", "thing"));// true console.log(isAnagram("apple", "papel"));// true console.log(isAnagram("test", "rest")); // false

// JavaScript — Set ✅ Definition: A Set is a built-in collection of unique values (no duplicates allowed).

Exmaple: let set = new Set();

// Adding elements set.add(1); set.add(2); set.add(3); set.add(2); // Duplicate, will be ignored

console.log("Set after adding:", set); // Set {1, 2, 3}

// Checking existence console.log(set.has(2)); // true console.log(set.has(5)); // false

// Deleting an element set.delete(2); console.log("After deletion:", set); // Set {1, 3}

// Looping through the Set for (let item of set) { console.log("Element:", item); }

// Size of the Set console.log("Total Elements:", set.size); // 2

// Clearing all elements set.clear(); console.log("After clear:", set); // Set {}
*/


let set = new Set();

set.add(1);
set.add(2);
set.add(3);

// console.log(set.has(2));
// set.delete(2);
console.log(set);

// console.log(set.size);
console.log(set.size);

set.clear()
console.log(set);
