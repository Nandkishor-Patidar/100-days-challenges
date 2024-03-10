let hcf ;
const a = 21;
const b = 14;
for(let i = 1; i<=a && i<=b; i++){
 if(a%i ==0 && b % i ==0){
    hcf = i
 }
}
let lcm =(a*b)/hcf;
console.log(hcf)