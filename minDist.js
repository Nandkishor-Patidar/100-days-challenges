function minDist(a, n, x, y) {
  let left = -1,
    right = -1,
    ans = n;
  for (let i = 0; i < n; i++) {
    if (a[i] == x) {
      left = i;
    }
    if (a[i] == y) {
      right = i;
    }
    if (left != -1 && right != -1) {
      ans = Math.min(ans, Math.abs(left - right));
    }
  }
  return ans == n ? -1 : ans;
}
let arr = [2, 4, 8, 9, 4, 7, 6, 2, 7, 9, 1, 9, 8];
let n = arr.length;
let x = 8,
  y = 7;
console.log(minDist(arr, n, x, y));