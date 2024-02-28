let a = 100;
function squareRoot(num){
    let result = a/2;
    let x;
    do{
        x = result;
        result = (x+(a/x))/2;
    }while ((x - result)!=0){
        return result;
    }
}

console.log(squareRoot(a))