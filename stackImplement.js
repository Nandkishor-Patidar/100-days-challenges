class Stack {
    constructor() {
        this.items = [];
    }
    add(element) {
        return this.items.push(element);
    }
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty(){
       return this.items.length == 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        return this.items = [];
    }
}

let stack = new Stack();
stack.add(4);
stack.add(8);
console.log(stack.items);
console.log(stack.remove());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.clear());