/*
let jewels = "aAa";
let  stones = "aAAbbbb";

let set = new Set();
for(let i = 0 ; i < jewels.length ; i++){
    set.add(jewels.charAt(i));
}
let count = 0;
for(let i = 0 ; i< stones.length; i++){
    if(set.has(stones[i])) count++;
}

console.log(count);
*/

/*
let n = 3;

let set = new Set();

let happy = false;
while (true) {
  let sum = 0;
  while (n > 0) {
    rem = n % 10;
    sum += rem * rem;
    n = Math.floor(n / 10);
  }

  if (sum == 1) {
    console.log(true);
    break;
  } else if (set.has(sum)) {
    console.log(false);
    break;
  } else set.add(sum);

  n = sum;
}
  */


 /*
  This method is non-mutating, meaning the original array remains unchanged.

set(): Adds a new key-value pair to the Map.
get(): Retrieves the value associated with a key.
has(): Checks if a key exists in the Map.
delete(): Removes a key-value pair from the Map.
clear(): Removes all entries from the Map.
entries(): Returns an iterator of [key, value] pairs.
keys(): Returns an iterator of keys.
values(): Returns an iterator of values.
forEach(): Executes a provided function once for each key-value pair in the Map.


let map = new Map();

map.set("Name","kashyap")
map.set("Name","rahul")
map.set("id",44)

// console.log(map);
// console.log(map.get("id"));
// console.log(map.keys("id"));
// console.log(map.values("id"));

for(let a of map){
console.log(a);

}
*/


let arr = [1, 1, 3, 4, 5, 3, 4, 5,5,5,5,5,5,5,5];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if(map.has(arr[i])){
    map.set(arr[i],map.get(arr[i])+1)
  }
  else{
    map.set(arr[i],1);
  }
}
console.log(map);

