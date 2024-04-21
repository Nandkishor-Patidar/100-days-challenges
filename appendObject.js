function appendObject(array,obj){
    array.push(obj);
    console.log(array);
}
const array = [4,6,8,2,5,1,5];
const obj = {a:20,b:10};
appendObject(array,obj);