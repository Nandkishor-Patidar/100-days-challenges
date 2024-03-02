
let LCM = (n1,n2)=>{
let lar = Math.max(n1,n2);
let sml = Math.min(n1,n2);
let i = lar;
while(i % sml !==0){
    i += lar;
}
return i;
}
console.log(LCM(20,15))