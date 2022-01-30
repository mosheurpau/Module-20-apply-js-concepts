/*
4! = 4 * 3 * 2 * 1
3! = 3 * 2 * 1
2! = 2 * 1
*/
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial *= i;
}
console.log(factorial);