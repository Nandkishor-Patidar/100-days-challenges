const person = {
    id: 1,
    name: 'John',
    age: 23
}
var key = 'name' in person
if(key) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}