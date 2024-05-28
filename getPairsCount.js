function getPairsCount(arr, n, k) {
    let count = 0;
    for(let i =0;i<n;i++){
        let r = k-arr[i]
        for(let j= i+1;j<n;j++){
            if(arr[j]===r){
                count++
            }
        }
    }
    return count;
}
let n = 6, k = 6;
let arr = [1, 5, 7, 1, 5, 6]
console.log(getPairsCount(arr,n,k))