function pushZerosToEnd(arr,n){
    let i=0;let j=0;
    while(i<n){
        if(arr[i]!=0){
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            i++;j++;
        }else{
            i++;
        }
    }
    return arr;
}
let array = [10,0,15,0,5,0,30];
let n = array.length;
console.log(pushZerosToEnd(array,n))