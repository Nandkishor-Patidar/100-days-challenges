function leapYear(year){
     if(year%4==0){
        return `${year} is a leap year.`
     }else{
        return `${year} is not a leap year.`
     }
}
console.log(leapYear(2012))