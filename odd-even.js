// is even function
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('isMyNumberEven :', isMyNumberEven);

const herNumber = 1898;
const isHerNumberEven = isEven(herNumber);
console.log('isHerNumberEven :', isHerNumberEven);

// is odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('isMyNumberOdd: ', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('isHerNumberOdd:', isHerNumberOdd);
