/*
let arr1 = [2, 5, 7,9,1].sort((a,b) => a-b);
let arr2 = [3, 6, 8];

let ans = new Array(arr1.length + arr2.length);
let i = 0,
  j = 0,
  k = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        ans[k] = arr1[i];
        i++
    }
    else if(arr2[j] < arr1[i]){
        ans[k] = arr2[j]
        j++;
    }
    k++
}

while(i < arr1.length){
    ans[k++] = arr1[i++];
}
while(j < arr2.length){
    ans[k++] = arr2[j++];
}

console.log(ans);
*/
/*
let num1 = [1, 2, 3, 0, 0, 0];
let num2 = [2, 7, 8];

let m = 3,
  n = 3;
let k = num1.length - 1;

let i = m - 1,
  j = n - 1;
while (i >= 0 && j >= 0) {
  if (num1[i] > num2[j]) {
    num1[k--] = num1[i--];
  } else {
    num1[k--] = num2[j--];
  }
 }

 while(j>=0){
     nun1[k--] = num2[j--];
 }
 console.log(num1);
 */
/*
 let arr = [0,0,1,1,1,2,2,2,3,3,3,3,4,4,4,4]

let j = 1;
i = 0

for(let i = 0 ; i < arr.length-1 ; i++){
    if(arr[i] !== arr[i+1]){
        arr[j++] = arr[i+1] 
    }
}
console.log(arr);
*/

let arr = [1, 0, 2, 0, 3, 4, 0, 0, 5];
duplicateZeros(arr);


 function duplicateZeros(arr) {
let zeroes = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] === 0) zeroes++;
}


let i = arr.length - 1;
let j = arr.length - 1 + zeroes;

while (i != j) {
    if (j < arr.length) arr[j] = arr[i];
    j--;

    if (arr[i] === 0) {
        if (j < arr.length) arr[j] = 0;
        j--;
    }
    i--;
}

}



console.log(arr);
