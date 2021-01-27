function selection(array){    
    for(let i=0; i< array.length; i++){
        let minValue = i;
        for(let j= i+1; j< array.length; j++){
            if(array[j]< array[minValue]) minValue = j;
        }
        if(i !== minValue){
            [array[i], array[minValue]] = [array[minValue], array[i]]
        }
    }  
    console.log(array);
    return array;
}

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) swap(arr, i, lowest);
    }
    console.log(">>>>>>>>>>>>>",arr)
    return arr;
  }

selection([10,25,-1,33,42,56]);
selectionSort([10,25,-1,33,42,56])