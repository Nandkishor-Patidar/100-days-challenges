const arr =[1,2,3,4,5,6,7,8,9,10];
const filteredFunction=(arr,callback)=>{
  const filteredArr=[];
  for (let i=0;i<arr.length;i++){
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}
const isOdd= (x) =>{
  return x%2 !=0;
}
const isEven= (x) =>{
  return x%2 ==0;
}
console.log(filteredFunction(arr,isOdd));
console.log(filteredFunction(arr,isEven));