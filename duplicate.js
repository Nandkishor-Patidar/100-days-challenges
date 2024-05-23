function duplicates(a, n)
    {
       const count = Array(n).fill(0); 
    const duplicates = [];
    for (let i = 0; i < n; i++) {
        count[a[i]]++;
    }
    for (let i = 0; i < n; i++) {
        if (count[i] > 1) {
            duplicates.push(i);
        }else{
         return '-1'
        }
    }

    return duplicates;
}
let n=4
let a=[0,3,1,2]
console.log(duplicates(a,n))