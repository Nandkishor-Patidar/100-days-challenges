function checkNumber(x) {
    if (Number.isInteger(x)) {
        console.log(`${x} is integer.`);
    }
    else {
        console.log(`${x} is a float value.`);
    }
}
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);