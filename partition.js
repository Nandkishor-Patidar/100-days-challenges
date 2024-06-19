function threeWayPartition(array, a, b){
    let i =0,j=0,n=array.length-1
    while(i<=n){
        if(array[i]<a){
            [array[i],array[j]]=[array[j],array[i]]
            i++;
            j++;
        }else if(array[i]>b){
            [array[i], array[n]] = [array[n], array[i]];
        n--;
        }else{
            i++
        }
    }
    return 1
}
const arr = [10,7,6,1,4,10,5,2,7,5,3,3,8,3,8]
let x=6;
let y = 6;
console.log(threeWayPartition(arr,x,y));
// 1) All elements smaller than a come first.
// 2) All elements in range a to b come next.
// 3) All elements greater than b appear in the end.