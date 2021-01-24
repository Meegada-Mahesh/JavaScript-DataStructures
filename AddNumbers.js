const now = require("performance-now");

function addUpTo(n){
    var total = 0;
    for(i=1;i<=n;i++){
        total += i
    }
    return total;
}
var start = now()
console.log(addUpTo(3000000000));
var end = now()
console.log((end-start).toFixed(3))

function addUpToOther(n){
    return n * (n+1)/2;
}
var start1 = now()
console.log(addUpToOther(3000000000));
var end1 = now()
console.log((end1-start1).toFixed(3))