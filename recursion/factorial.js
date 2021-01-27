//iterative way

// function factorial(num){
//     let total = 1;
//     for(let i = num;i>0;i--){
//         total *= i;
//     }
//     console.log(total);
// }

// factorial(6)

//recursive way

function factorial(num){
    let total;
    if(num === 1) return 1;
    total = num*factorial(num-1);  
    return total 
}

console.log(factorial(21));