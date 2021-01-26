class HashTable{
    constructor(size=4){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let PRIME = 31;
        for(let i=0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let hashkey = this._hash(key);
        if(!this.keyMap[hashkey]){
            this.keyMap[hashkey] = [];
        }
        this.keyMap[hashkey].push([key, value]);
        // return hasharray;    
    }
}

let ht = new HashTable();
ht.set("hello world","goodbye!!");
ht.set("dogs","are cool");
ht.set("cats","are fine");
ht.set("i love","pizza");
ht.set("i love","pizza");
ht.set("i love","pizza");

console.log(ht)