// initial implementation bubble sort

function bubble(array){
    for(var i=array.length; i> 0; i--){
        for(var j = 0; j< i-1; j++){
            if(array[j]> array[j+1]) [array[j],array[j+1]] = [array[j+1], array[j]]
        }
    }
    return array;
}

console.log(bubble([37,45,29,8]))

// Optimal Implementation for nearly sorted array
function bubblesort(array){
    var noSwaps; 
    for(var i=array.length; i> 0; i--){
        noSwaps = true;
        for(var j = 0; j< i-1; j++){
            if(array[j]> array[j+1]) {
                [array[j],array[j+1]] = [array[j+1], array[j]]
                noSwaps = false; 
            }
        }
        if(noSwaps) break;
    }
    return array;
}