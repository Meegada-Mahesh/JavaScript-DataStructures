// Implementing Stacks Using Array
// var stack = [];
// stack.push("Google.com");
// stack.push("instagram");
// stack.push("youtube.com");
// stack.pop();
// using Lifo principle push and pop or use unshift and shift to insert and remove elements in stack
// Although unshift and shift are not performance optimal

class Node {
    constructor(value){
        this.data = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    push(value){
        var newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++
        } else {
            newNode.next = this.first;
            this.first = newNode;
            this.size++
        }
        return this;
    }
    pop(){
        if(!this.first) return null;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
            this.size--;
        } else { 
            this.first = this.first.next;
            this.size--;
        }
        return this;
    }
}

var stack = new Stack();


