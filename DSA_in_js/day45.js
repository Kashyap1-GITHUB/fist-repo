/*
let mat = [[2,3,4],
           [4,5,6]];

let row = mat[0].length
let col = mat.length
let ans = new Array(row);

for(let i = 0 ; i < ans.length;i++){
    ans[i] = new Array(col);
}

for(let i = 0 ; i < ans.length ; i++){
    for(let j = 0; j < ans[i].length ;j++){
        ans[i][j] = mat[j][i];
    }
}

console.log(ans);
// [*,*]
// [*,*]
// [*,*]

*/

/*
let arr = [[1,2,3],[4,5,6],[7,8,9]];


for(let i = 0 ; i < arr.length;i++){
    for(let j = i; j < arr[i].length;j++){  
        console.log(i);
        console.log(j);
        
        
       console.log( temp = arr[i][j])
       console.log( arr[i][j] = arr[j][i])
        console.log(arr[j][i] = temp)
    }
}


for(let i = 0 ; i < arr.length; i++){
        let laft = 0, right =  arr[i].length-1;
        while(laft < right){
            temp = arr[i][laft];
            arr[i][laft] = arr[i][right];
            arr[i][right] = temp
            laft++;
            right--;
        }
}
console.log(arr);

*/
[7,4,1]
[6,5,2]
[9,8,3]