function areRotations(s1, s2){
    let str=s1+s1;
    if(str.includes(s2)){
        return true;
    }
    return false;
}
let str1 = 'weloveindia';
let str2= 'loveindiawe';
console.log(areRotations(str1,str2))