function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) 
        unionSet.add(i);
    
    return unionSet
} 
const setA = new Set(['orange', 'mango', 'apple', 'litchi']);
const setB = new Set(['grapes', 'apple', 'banana']);

console.log(union(setA, setB));




function intersection(setX, setY) {
    let intersectionSet = new Set();

    for (let i of setY) {
        if (setX.has(i)) 
            intersectionSet.add(i);
        
    }
    return intersectionSet;
}
const setX = new Set(['apple', 'mango', 'orange', 'litchi', 'strawberry']);
const setY = new Set(['grapes', 'apple', 'banana']);

const result1 = intersection(setX, setY);

console.log(result1);