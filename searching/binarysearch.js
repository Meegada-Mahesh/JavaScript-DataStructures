function binarysearch(dataArray, value){
    let idx = 0;
    let endidx = dataArray.length - 1;
    let midIdx = Math.floor((idx+endidx)/2);
    while(dataArray[midIdx] !== value && idx <=  endidx){
        if(value < dataArray[midIdx]) endidx = midIdx-1;
        else idx = midIdx+1
        midIdx = Math.floor((idx+endidx)/2);
    }
    console.log(midIdx, value)
    return dataArray[midIdx] === value ? midIdx : -1
}

binarysearch([34,51,1,2,3,45,56,687],3)