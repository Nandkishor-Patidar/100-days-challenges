const num = 29;

console.log(`The factors of ${num} is:`);

for(let i = 1; i <= num; i++) {

    if(num % i == 0) {
        console.log(i);
    }
}