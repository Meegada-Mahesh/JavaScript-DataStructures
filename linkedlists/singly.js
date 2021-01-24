// Singly Linked List implementation Javascript

class Node {
    constructor(data){
        this.data = data;
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
        // console.log(current, counter, index)
        return current;
    }

    setAtIndex(index, value){

        // simple solution
        // var foundNode = this.get(index);
        // if(foundNode){
        //     foundNode.data = value;
        //     return true;
        // }else{
        //     return false;
        // }
        if(index < 0 || index >= this.length) return null;
        var current = this.head;
        var counter = 0
        while(counter !== index){
            current = current.next;
            counter++
            if(counter > this.length){
                return "Not Found"
            }
        }
        // console.log(current, index, value);
        current.data = value;
        return current;
    }

    insert(index, value){
        // double bang converts into boolean
        if(index < 0 || index >= this.length) return null;
        if(index === this.length) {
            return !!this.push(value);
        }
        if(index === 0){
            return !!this.unshift(value);
        }
        var preNode = this.getAtIndex(index-1);
        var newNode = new Node(value);
        if(preNode){
            var temp = preNode.next;
            preNode.next = newNode;
            newNode.next = temp;
            this.length++; 
            return true;
        }else{
            return false;
        }
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index === (this.length-1)) return !!this.pop();
        if(index === 0) return !!this.shift();
        var preNode = this.getAtIndex(index-1);
        if(preNode){
            var temp = preNode.next;
            preNode.next = temp.next;
            this.length--;
            return temp;
        }
    }

    reverse(){
        if(this.length === 0) return false;
        if(this.length === 1) {
            var temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            this.tail.next = null;
        }
        // swaping head and tail
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prevNode = null;
        var nextNode;
        for(var i=0; i<this.length; i++){
            nextNode = node.next;
            node.next =  prevNode;
            prevNode = node;
            node = nextNode;
        }
        return this;
        // while(nextNode.next){
        //     nextNode.next = prevNode;
        //     prevNode = nextNode;
        //     nextNode = secondNode;
        //     secondNode = nextNode.next;
        // }
        // swaphead.next = swapTail.next;
        // return this;
    }

    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList()
list.push("Hello");
list.push("There");
list.push("third");
list.push("fourth");
// list.pop();

// list.shift();
list.unshift("ZERO");

list.getAtIndex(0);
list.getAtIndex(1);
list.getAtIndex(2);

list.setAtIndex(2, "Meegada");
list.setAtIndex(1, "Mahesh");
console.log(list)
list.print();
list.reverse();
list.print();