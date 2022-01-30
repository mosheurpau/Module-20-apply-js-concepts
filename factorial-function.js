function factorialFun(factorialNumber) {
    let factorial = 1;
    for (let i = 1; i <= factorialNumber; i++) {
        factorial *= i;
    }
    return factorial;
}

var number = 7;
var myNumber = factorialFun(number);
console.log('My Factorial Number is: ', myNumber);

var yourNumber = 3;
var yourFactorialNumber = factorialFun(yourNumber);
console.log('My Factorial Number is: ', yourFactorialNumber);
