function removeItemFromArray(array, n) {
    const index = array.indexOf(n);
    if(index > -1) {
        array.splice(index, 4);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

console.log(result);