function print2ndlargest(arr,n){
    let A = arr.sort((a,b)=>b-a)
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
            return arr[i+1]
            break;
        }
    }
    return -1
}
let n= 5;
let arr = [10,5,0,18,16]
console.log(print2ndlargest(arr,n))