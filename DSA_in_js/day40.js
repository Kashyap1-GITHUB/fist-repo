/*
 Array left rotation by K elements
 type 1

let arr = [1,2,3,4,5]
let k = 3;
k = k % arr.length
for(let j = 0; j < k ; j++){
    let temp = arr[0]
    for(let i = 0; i< arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;           
}

console.log(arr);
*/
/*
Array left rotation by K elements
type 2
let arr = [1,2,3,4,5]
let temp =new Array(arr.length);
let k = 2;

    for(let i = 0; i< arr.length;i++){
        temp[i] = arr[(i+k) % arr.length];
    }
console.log(temp);
*/

/*
Array left rotation by K elements
type 3

let arr = [1,2,3,4,5]
let k = 2;
k = k % arr.length;
rota(arr,0,k-1);
rota(arr,k,arr.length-1);
rota(arr ,0,arr.length-1);
console.log(arr);

function rota(arr , i , j){
    while(i < j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
*/

/*
Linear Search an array - If element found print the index else -1

let arr = [1,2,3,4,5]
let ele = 8;
index = -1;
for(i = 0 ; i < arr.length ;i++){
if(arr[i] == ele){
    index = i
}
}

if(index == -1) console.log("index not found");
else console.log(`${ele} found ${index}`);
*/


let arr = [2,3,4,10,45,56,75,92,123]

if(binarySearch(arr,92) === -1) console.log("Element not found");
else console.log("Element found");


function binarySearch(arr,target){
let s = 0 , e = arr.length-1;
while(s <= e){
    let mid = Math.floor((s + e)/2) 
     if(arr[mid] == target) return mid;
     else if(arr[mid] > target) e = mid - 1
     else if(arr[mid] < target) s = mid + 1
    }
    return -1
}