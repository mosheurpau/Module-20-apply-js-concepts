var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// Array
var parthner = ['shakil', 'kamrul', 'soykot', 'sami'];
var elementCount = parthner.length;
var kamrulIndex = parthner.indexOf('kamrul');
parthner.push('parves');
parthner.pop();

// conditionals
if (bookPrice < 120) {
    console.log('I will buy this book');
}
else {
    console.log('mama, kisu discount den na');
}

// loop
var i = 0;
while (i < 20) {
    console.log(i);
    i++;
}

for (var i = 0; i < 5; i++) {
    console.log(i);
}

// function
function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);

// let const

// value of variable could change 
let price = 27;
price = 29;
price = 31;

// value of variable will not change 
const name = 'Mosheur Rahman'
console.log(myName);
