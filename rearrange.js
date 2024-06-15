function rearrange(arr, n) {
  let pos = [];
  let neg = [];
  for (let num of arr) {
    if (num >= 0) {
      pos.push(num);
    } else {
      neg.push(num);
    }
  }
  let i = 0,
    j = 0,
    k = 0;
  while (i < pos.length && j < neg.length) {
    arr[k++] = pos[i++];
    if (k < arr.length) {
      arr[k++] = neg[j++];
    }
  }
  while (i < pos.length) {
    arr[k++] = pos[i++];
  }
  while (j < neg.length) {
    arr[k++] = neg[j++];
  }

  return arr;
}
let arr=[10,-1,20,15,5,-7,-10,-12];
let n=arr.length;
console.log(rearrange(arr,n))