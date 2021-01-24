class Node {
    constructor(value){
        this.data = value;
        this.next = null; 
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    enqueue(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size
    }

    dequeue(){
        if(!this.first) return null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
    }
}

var queue = new Queue();
