function isPalindrome(S){
    let start =0;
    let end =S.length-1;
    while(start<end){
        if(S.charAt(start)!=S.charAt(end)){
            return 0;
        }
        start++;
        end--;
    }
    return 1;
}

let S ='nayan';
console.log(isPalindrome(S))