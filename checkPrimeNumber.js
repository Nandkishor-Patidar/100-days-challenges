let a = 29
let isPrime = true;
if(a===1){
    console.log("1 is neither prime nor composite number")
}
else if(a>1){
    for(let i= 2 ;i< a;i++){
        if (a%i== 0){
            isPrime = false;
            break
        }
    }

if(isPrime){
    console.log("Prime")
}
else{
    console.log("Composite")
}
}