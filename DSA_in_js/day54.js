/*
let nums = [10,2,11,15,7]
let target = 9;
let arr = []

for(let i =0 ; i<nums.length;i++){
    for(let j = i+1;j<nums.length;j++){
        if(nums[i] + nums[j] === target){
            arr.push(nums[i],nums[j])
            }
            } 
            }
            console.log(arr);
            */

/*
let nums = [10, 2, 11, 15, 7];
let target = 26;
let map = new Map();
let ans = [];

for(let i =0 ;i<nums.length;i++){
    if(map.has(target - nums[i])){
        ans[0] = i;
        ans[1] = map.get(target-nums[i])
    }
    else{
        map.set(nums[i],i)
    }
}

console.log(ans);
*/
/*
let s = "abccbaacz";
let map = new Map();

for (let i = 0; i < s.length; i++) {
  if (map.has(s[i])) {
    // map.get(s[i]+1);
    console.log(s[i]);
    break
    
  } else {
    map.set(s[i], 1);
  }
}
// console.log(map);
*/

let names = ["Mary","John","Emma"];
let heights = [180,165,170];
let map = new Map();
let ans =[]
for(let i=0; i<names.length;i++){
    map.set(heights[i],names[i]);
}
heights.sort((a,b) => b - a);


for(let i =0 ; i <heights.length ;i++){
    if(map.has(heights[i])){
        ans.push(map.get(heights[i]))
    }
}
console.log(ans);

// console.log(map);
