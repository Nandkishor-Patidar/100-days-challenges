function nonrepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }
  return "$";
}
let str = "india";
console.log(nonrepeatingCharacter(str));