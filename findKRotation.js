function findKRotation(arr,n) {
   let count = 0;
    
    for(let i = 0; i< n; i++){
        if(arr[i] > arr[i+1]){
            count = i + 1;
        }
    }
    return count;
}
let a=[10,11,13,12,15,14,13,16];
let n=a.length;
console.log(findKRotation(a,n))