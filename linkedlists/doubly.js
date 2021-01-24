class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++
        }
        return this;
    }

    pop(){
        if(!this.head) return null;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }else{
            var temp = this.tail.prev;
            temp.next = this.tail.next;
            this.tail = temp;
            this.length--;
        }
        return this;
    }

    shift(){
        if(!this.head) return null;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }else{
            var newHead = this.head.next;
            newHead.prev = this.head.prev;
            this.head = newHead;
            this.length--;
        }
        return this;
    }

    unshift(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
        }else{
            newNode.next = this.head;
            newNode.prev = this.head.prev;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++
        }
    }

    getAtIndex(index){
        if(index < 0 || index > this.length) return null;
        if(index <= (this.length)/2){
            var current = this.head;
            var counter = 0;
            while(counter !== index){
                current = current.next;
                counter++;
            }
            console.log(index, current, current.data)
            return current;
        }else{
            var torrent = this.tail;
            var counter = this.length;
            while(counter !== index){
                torrent = torrent.prev;
                torrent--;
            }
            console.log(index, torrent, torrent.data)
            return torrent;
        }
    }

    setAtIndex(index, value){
        let foundNode = this.getAtIndex(index);
        if(foundNode){
            foundNode.data = value
            return this;
        }else{
            return false
        }
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        let beforeNode = this.getAtIndex(index-1);
        console.log("Before Node ",beforeNode)
        var newNode = new Node(value);
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = beforeNode.next;
        beforeNode.next.prev = newNode;
        console.log("New Node is",newNode);
        this.length++;
        console.log("THis.lenght is ",this.length);
        return true;
    }
}

var list = new DoublyLinkedList();
list.push("First");
list.push("Second");
list.push("Third");
list.push("Fourth");
list.push("Fifth");
list.push("Sixth");
list.push("Seventh");

// console.log(list)

list.pop();
list.shift();
list.unshift("Zero")
// console.log(list)
// list.getAtIndex(2);
// list.setAtIndex(2,"Three");
list.insert(3,"ThreeandHalf")
// list.getAtIndex(5);