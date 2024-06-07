function Maximize(arr,n){
    let sum=0
    arr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        sum+=(i*arr[i])
    }
    return sum
 }
 let a = [4,2,5,8,9,3,1,22,5,7,6]
 let n=a.length;
 console.log(Maximize(a,n))