function isAnagram(a, b) {
  let A = a.split("").sort().join("");
  let B = b.split("").sort().join("");
  if (A == B) {
    return true;
  }
  return false;
}
let a = "allthebest";
let b = "besttheall";
console.log(isAnagram(a, b));
