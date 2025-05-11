/*
let nums = [0, 0, 1, 1, 1, 2, 1, 0, 2, 0, 1, 2, 1];

function shortcolor(nums) {
  let j = 0;
  let k = nums.length - 1;
  let i = 0;
  while (i <= k) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    } else if (nums[i] == 2) {
      temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;

      k--;
    } else i++;
  }

  console.log(nums);
}

shortcolor(nums);
*/
/*
let height = [0, 2, 1, 0, 3, 1, 0, 1, 2, 1, 2, 1];

let left = new Array(height.length);
left[0] = height[0];
let right = new Array(height.length);
right[height.length - 1] = height[height.length - 1];

let ans = 0;

for (let i = 1; i < height.length; i++) {
  maxleft = Math.max(left[i - 1], height[i]);
  left[i] = maxleft;
}
for (let i = height.length - 2; i >= 0; i--) {
  maxright = Math.max(right[i + 1], height[i]);
  right[i] = maxright;
}

for (let i = 0; i < height.length; i++) {
  ans += Math.min(right[i], left[i]) - height[i];
}

console.log(ans);
*/

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let ans = 0;
let i = 0,
  j = height.length - 1;

while (i < j) {
  ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));

  if (height[i] < height[j]) i++;
  else j--;

}
console.log(ans);

