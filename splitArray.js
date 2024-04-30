const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;

    while(array.length > 0) {
        let tempArray = array.splice(0, chunk);
        console.log(tempArray);
    }