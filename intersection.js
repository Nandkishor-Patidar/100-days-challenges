function ElementsInIntersection(a, b) {
  const setA = new Set(a);
  let count = 0;
  let arr=[];

  for (let element of b) {
    if (setA.has(element)) {
       arr.push(element)
      count++;
      setA.delete(element);
    }
  }

  return {count, arr};
}
const arr1=[10,12,15,13,25,20,41];
const arr2=[10,20,17,15,18,25];
console.log(ElementsInIntersection(arr1,arr2))