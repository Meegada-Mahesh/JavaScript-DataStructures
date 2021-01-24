// Singly Linked List implementation Javascript

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; 
    }
    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    pop(){
        if(!this.head){
            return undefined;
        }else{
            var current = this.head;
            var pre = current;
            while(current.next){
                pre = current;
                current = current.next;
            }
            this.tail = pre;
            this.tail.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }

    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        var nextNode = current.next;
        this.head = nextNode;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
        } else{
            var currentHead = this.head;
            this.head = newNode;
            newNode.next = currentHead;
        }
        this.length++;
        return this;
    }

    getAtIndex(index){
        if(index < 0 || index >= this.length) return null;
        var current = this.head;
        var counter = 0;
        while(counter !== index){
            current = current.next;
            counter++
        }
        console.log(current, counter, index)
        return current;
    }
}

var list = new SinglyLinkedList()
list.push("Hello");
list.push("There");
list.push("third");
list.push("fourth");
list.pop();

list.shift();
list.unshift("ZERO");

list.getAtIndex(0);
list.getAtIndex(1);
list.getAtIndex(2);

console.log(list)