function equilibriumPoint(a, n){
        let sum = a.reduce((a,b)=>a+b,0)
        let left = 0;
        for(let i =0;i<n;i++){
            sum-=a[i];
            if(left === sum){
                return i+1;
            }
            left += a[i]
        }
    return -1;
    }
 let n=8;
 let a= [1,3,5,2,2,10,12,1];
 console.log(equilibriumPoint(a,n))