const person = {
    name:'Ram',
    age:21
}
const clone = {...person}
console.log(clone)
clone.name='raman';
console.log(clone.name)