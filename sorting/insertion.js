function insertion(array){
    for(let i = 1; i< array.length; i++){
        var currentVal = array[i];
        for(var j = i-1; j>=0 && array[j] > currentVal; j--){
            array[j+1] = array[j]
        }
        array[j+1] = currentVal;
    }
    console.log(array);
    return array;
}

insertion([2,1,9,76,4])