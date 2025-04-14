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
