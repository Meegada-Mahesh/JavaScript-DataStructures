// Not an Optimal Solution

// function fibonacci(n){
//     if(n<=2) return 1;
//     return fibonacci(n-1)+ fibonacci(n-2);
// }

// console.log(fibonacci(50));

// Dynamic Programming example

function fibonacci(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]
    if(n<=2) return 1;
    var result = fibonacci(n-1, memo)+ fibonacci(n-2, memo);
    memo[n] = result;
    return result;
}

console.log(fibonacci(1000));

