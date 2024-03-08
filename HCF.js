let hcf;
const x = 20;
const y = 25;
for (let i = 1; i <= x && i <= y; i++) {
    if( x % i == 0 && y % i == 0) {
        hcf = i;
    }
}
console.log(`HCF of ${x} and ${y} is ${hcf}.`);