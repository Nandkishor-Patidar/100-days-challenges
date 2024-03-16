function checkPalindrome(str){
    const len = str.length;
    for(let i = 0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return "It isn't palindrome"
        }
    }
    return 'it is a palindrome'
}
const str = 'namane'
console.log(checkPalindrome(str))