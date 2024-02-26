let x = [2,5,9,6,3,5];



for (let i = 2; i <= 9; i++) {
    let flag = 0;

    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

   
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}