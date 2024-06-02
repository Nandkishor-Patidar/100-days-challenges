function transitionPoint(arr, n) {
    for(let i = 0;i<n;i++){
        if(arr[i]==1){
            return i;
        }
    }
    return -1
}
let arr=[0,0,1,0,1,1,0]
let n = 7;
console.log(transitionPoint(arr,n))