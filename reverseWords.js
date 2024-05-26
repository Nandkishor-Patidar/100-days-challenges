function reverseWords(s) {
  let S = s.split(" ").reverse().join(" ");
  return S;
}
let s = 'I love my country';
console.log(reverseWords(s))