/*
 Bubble sort

let arr = [1, 4, 3, 2, 9, 10];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  for (j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);
*/

/*
insertion sort

let arr = [2,3,56,1,354,67,4];

for(let i = 0; i < arr.length-1;i++){
    small = i; //1
    for(let j = i+1; j< arr.length ;j++){
        if(arr[small] > arr[j]){
            small = j;
        }
    }
    if(i != small){
        let temp = arr[small];
        arr[small] = arr[i];
        arr[i] = temp
    }
}
console.log(arr);
*/

let arr = [10,2,40,20,30,22,32];
let n = arr.length;
for(let i = 1 ; i < n ; i++){
  let key =  arr[i];
 let j = i - 1;
 while(j>=0 && key < arr[j]){
  arr[j+1] = arr[j];
  j--
 }
 arr[j+1] = key
}
console.log(arr);
