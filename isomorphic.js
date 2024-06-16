function areIsomorphic(str1, str2){
let a = str1.split('');
    let b = str2.split('');
    let seta= new Set(a);
    let setb= new Set(b);
    let object = {};
    if(seta.size!==setb.size){
        return false;
    }
    else{
        for(let i=0;i<str1.length;i++){
            if(object.hasOwnProperty(a[i])){
                if(object[a[i]]!==b[i]){
                    return false;
                }
            }
            else{
                object[a[i]]=b[i];
            }
        }
    }
    return true;
}
let str1='bdc';
let str2='ywx';
console.log(areIsomorphic(str1,str2))