class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values =  [];
    }

    enqueue(element, priority){
        var newNode = new Node(element, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0){
            let parentidx = Math.floor((idx-1)/2);
            let parentValue = this.values[parentidx];
            if(parentValue.priority <= element.priority) break;
            this.values[parentidx] = element;
            this.values[idx] = parentValue
            idx = parentidx;
        }
    }

    dequeue(){
        //swapping with first element and pop the last element
        let minValue = this.values[0];
        let end = this.values.pop();
        if(this.values.length>0){
            this.values[0] = end;
            this.sinkDown();
        }
        return minValue;
    }

    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftIndex = 2*idx+1;
            let rightindex = 2*idx+2;
            let leftChild, rightChild;
            let swap = null;
            if(leftIndex < length){
                leftChild = this.values[leftIndex];
                if(leftChild.priority < element.priority){
                    swap = leftIndex;
                }
            }
            if(rightindex < length){
                rightChild = this.values[rightindex];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightindex;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap; 
        }
    }
}

let pq = new PriorityQueue();
pq.insert(41);
pq.insert(39);
pq.insert(33);
pq.insert(18);
pq.insert(27);
pq.insert(12);
pq.insert(55);
console.log(pq);

