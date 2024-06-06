function remove_duplicate(arr, n) {
  let j = 0;
  arr.sort((a,b)=>a-b)
  for (let i = 1; i < n; i++) {
    if (arr[i] != arr[j]) {
      arr[j + 1] = arr[i];
      j++;
    }
  }
  return (j + 1);
}
let arr = [2, 1, 5, 1, 5, 2, 7, 2, 9, 7];
let n = arr.length;
console.log(remove_duplicate(arr, n));