function factorial(n) { 
    if (n === 0 || n === 1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
let num1 = 6; 
let result = factorial(num1); 
console.log("The factorial of given number is :" + result);