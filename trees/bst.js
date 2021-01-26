class Node {
    constructor(value){
        this.data = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){    
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }else{
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.data){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } 
                    current = current.left;
                }else {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value){
        if(!this.root) return false;
        if(this.root === value) return true;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(value < this.root){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(value){
        if(!this.root) return false;
        if(this.root === value) return true;
        var current = this.root;
        while(current && true){
            if(value < this.root){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    bfs(){
        var data = [], queue = [], node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.data);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        console.log(data)
        return data;
    }
}


var bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

bst.bfs();

console.log(bst);

