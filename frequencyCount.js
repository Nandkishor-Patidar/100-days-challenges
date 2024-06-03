function frequencyCount(arr,N){
    let frequency={};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
    }
    return frequency;
 }
let arr =[1, 3, 2, 3, 5, 10, 5, 2, 3]
let N= arr.length;
console.log(frequencyCount(arr,N))