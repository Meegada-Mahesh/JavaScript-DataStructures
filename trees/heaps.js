class MaxBinHeap{
    constructor(){
        this.values =  [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0){
            let parentidx = Math.floor((idx-1)/2);
            let parentValue = this.values[parentidx];
            if(parentValue > element) break;
            this.values[parentidx] = element;
            this.values[idx] = parentValue
            idx = parentidx;
        }
    }
}

let heap = new MaxBinHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);

