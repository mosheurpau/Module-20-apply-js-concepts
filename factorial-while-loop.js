// function getFactorial(factorialNumber) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= factorialNumber) {
//         factorial *= i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(3);
// console.log('My factorial is :', myFactorial);

// const herNumber = 5;
// const herFactorial = getFactorial(herNumber);
// console.log('My factorial is :', herFactorial);


// while loop reverse 

function getFactorial(factorialNumber) {
    let factorial = 1;
    let i = factorialNumber;
    while (i >= 1) {
        factorial *= i;
        i--;
    }
    return factorial;
}

// let myFactorial = getFactorial(3);
// console.log('My factorial is :', myFactorial);


// for loop reverse 
function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
}

const myFactorial = getFactorial2(5);
console.log('My factorial is :', myFactorial);

