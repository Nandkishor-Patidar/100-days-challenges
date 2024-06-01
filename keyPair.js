function keyPair(arr,x,n){
    arr.sort((a, b) => a - b);
    let left = 0;
let right = n - 1;
while (left < right) {
   let sum = arr[left] + arr[right];
   if (sum === x) {
       return true; 
   } else if (sum < x) {
       left++; 
   } else {
       right--; 
   }
}

return false;
}
let arr = [1,14,45,6,10,8];
let x= 51;
let n=6;
console.log(keyPair(arr,x,n))