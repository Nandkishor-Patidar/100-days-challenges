function arraySortedOrNot(arr, n) {
   for (let i = 0;i<n;i++)
    if(arr[i+1]<arr[i]){
        return false;
    }
    return true;
}
let arr=[10,15,18,20,19,30];
let n =arr.length;
console.log(arraySortedOrNot(arr,n))