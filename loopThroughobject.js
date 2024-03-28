const person = {
    name:"ravi",
    age:22,
    hobbies:['reading','games','coding']
};
for(let key in person){
    let value = person[key]
    console.log(key +':'+value)
}
