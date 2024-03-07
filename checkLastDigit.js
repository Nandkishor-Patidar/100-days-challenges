function checkLastDigit(x1,x2){
    const lastDigit1 = x1%10;
    const lastDigit2 = x2%10;

    return lastDigit1 === lastDigit2;
}
const x1 = 143;
const x2 = 153;
const result = checkLastDigit(x1 ,x2);

console.log(result)