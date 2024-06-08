function isRotated(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let len = str1.length;
  for (let i = 0; i < len; i++) {
    if (
      str1[i] !== str2[(i + 2) % len] &&
      str1[i] !== str2[(i - 2 + len) % len]
    ) {
      return false;
    }
  }
  return true;
}
let str1 = "advance";
let str2 = "ceadvan";
console.log(isRotated(str1, str2));