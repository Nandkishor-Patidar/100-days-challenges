let str = 'PrimAthon'
function countVowel(str){
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
console.log(countVowel(str))