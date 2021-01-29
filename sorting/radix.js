function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10, i))%10;
}

function digitCount(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1
}

function mostDigits(arr){
    let maxDigits = 0;
    for(let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits,digitCount(arr[i]))
    }
    return maxDigits;
}

function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let k =0; k< maxDigitCount;k++){
        let digitBuckets = Array.from({length: 10},()=>[])
        for(let i=0; i< arr.length; i++){
            let digit = getDigit(arr[i],k);
            digitBuckets[digit].push(arr[i]);

        }
        arr = [].concat(...digitBuckets)
    }
    console.log(arr);
    return arr
}

console.log(getDigit(-14562, 0));
console.log(digitCount(14562));
radixSort([23,345,5467,12,2345,9852]);