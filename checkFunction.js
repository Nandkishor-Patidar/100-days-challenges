function check(v) {if (typeof v === "function"){
          return 'The variable is of function type';
}else{
    return 'The variable is not of function type'
} };

const v = function(){
    return 'hello world'
}
const r = 'hello'
console.log(check(v));
console.log(check(r));