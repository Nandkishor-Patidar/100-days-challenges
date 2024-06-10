function productExceptSelf(nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let mul = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        mul *= nums[j];
      }
    }
    result.push(mul);
  }
  return result;
}
let arr =[2,4,8,6,7,2,5];
let n=arr.length;
console.log(productExceptSelf(arr,n))