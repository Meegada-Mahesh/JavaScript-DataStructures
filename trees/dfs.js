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
    dfspre(){
        var data = [];
        function traverse(node){
            data.push(node.data);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        console.log(data)
        return data;
    }
    dfspost(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.data);
        }
        traverse(this.root);
        console.log(data);
        return data;
    }

    dfsinorder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.data);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        console.log(data);
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

bst.dfspre();
bst.dfspost();
bst.dfsinorder();

console.log(bst);

