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

    extractMaxHeap(){
        let lastIdx = this.values.length - 1;
        //swapping with first element and pop the last element
        let maxValue = this.values[0];
        this.values[0] = this.values[lastIdx];;
        this.values[lastIdx] = maxValue;
        this.values.pop();

        this.sinkDown(this.values[0]);
    }

    sinkDown(element){
        let elementIndex = this.values.findIndex(element);
        
        while(true){
            let leftIndex = 2*elementIndex+1;
            let rightindex = 2*elementIndex+2;
            if(leftIndex < this.values.length-1 && this.values[leftIndex] > element){
                this.values[elementIndex] = this.values[leftIndex];
            }else if(swap === rightindex < this.values.length-1 && this.values[rightindex] > element){
                this.values[elementIndex] = this.values[rightindex];
            }else {
                break;
            }
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

