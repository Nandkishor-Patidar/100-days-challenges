function checkObject(arr){
    const res = Array.isArray(arr);
    if(res){
        console.log(`[${arr}] is an array`)
    }else{
        console.log(`[${arr}] not an array`)
    }
}
const array = [10,9,'banana',5];
checkObject(array)