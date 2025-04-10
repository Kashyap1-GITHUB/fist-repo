/*

let arr = [2,96,96,86,69,77,20]

let max = Math.max(arr[0],arr[1])
let secendemax = Math.min(arr[0],arr[1])

for(let i = 2 ; i < arr.length ;i++ ){
    if(arr[i] > max){
        secendemax = max;
        max = arr[i]
    }
    else if(arr[i] > secendemax && arr[i] != max){
        secendemax = arr[i]
    }
}
console.log(max);

console.log(secendemax);
*/

/*
let arr = [2,96,96,86,69,77,20]

let min = Math.min(arr[0],arr[1]) //
let secendemin = Math.max(arr[0],arr[1])

for(let i = 2 ; i < arr.length ;i++ ){
    if(arr[i] < min){
        secendemin = min;
        min = arr[i]
    }
    else if(arr[i] < secendemin && arr[i] != min){
        secendemin = arr[i]
    }
}
console.log(min);

console.log(secendemin);
*/
/*
let arr = [2,96,96,86,69,77,20]

let arr1 = new Array(arr.length);
let j = 0
for(let i = arr.length-1; i >=0 ; i--){
    arr1[j] = arr[i];
    j++;
}
console.log(arr);
console.log(arr1);

*/
/*
let arr = [2,96,96,86,72,69,77,20]

let j = arr.length-1
let i = 0;

while (i < j) {
    tamp = arr[j]
    arr[j] = arr[i]
    arr[i] = tamp;

    i++;
    j--; 
}
console.log(arr);
*/
/*
let arr = [0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1]

let j = arr[0];
let i = arr[0];

while (i < arr.length) {
    if (arr[i] == 0) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp ;
        j++
    }
    i++;
}
console.log(arr);

*/
/*
let arr = [1,2,3,4,5]

let i = 0;

let temp = arr[0]
while(i < arr.length-1){
    arr[i] = arr[i+1]
    i++;
}
arr[arr.length-1] =  temp

console.log(arr);
*/
/*

let arr = [1,2,3,4,5]

let i = arr.length-1;

let temp = arr[arr.length-1]
while(i > 0){
    arr[i] = arr[i-1]
    i--;
}
arr[0] =  temp

console.log(arr);
*/
/*
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
arr[i] = arr[i + 1];
}
arr.length = n - 1;
console.log(arr);
*/
/*
let arr = [0,1,0,1,1,0,0,0]
let copy = new Array(arr.length);
let n = arr.length;
let i = 0 , j = n-1

for(let k = 0 ; k < n ; k++){
    if(arr[k] > 0){
        copy[i++] = arr[k]
    }
    else{
        copy[j--] = arr[k]
    }
}

console.log(copy);
*/
