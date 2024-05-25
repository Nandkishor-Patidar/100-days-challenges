function ispar(x){
         const stack =[]
         const bracket ={ '}':'{',
        ')': '(',
        ']':'['
         }
         
         for(let i =0;i<x.length;i++){
         const char = x[i];
             if(char === '{' || char === '(' || char === '[') {
                 stack.push(char);
             }else {
            const top = stack.pop();
            if (bracket[char] !== top) {
                return false;
            }
         }
         }
         return stack.length ===0;
    }

    let x ='{([])}'
    console.log(ispar(x))