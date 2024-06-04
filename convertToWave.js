function convertToWave(arr, n) {
  for (let i = 0; i < n - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
let arr = [2, 5, 8, 4, 9, 7, 5, 2, 6, 7, 5];
let n = arr.length;
console.log(convertToWave(arr,n));
