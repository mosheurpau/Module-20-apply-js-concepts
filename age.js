function isAgeEven(age) {
    if (age % 2 == 0) {
        return true;
    }
    return false;
}

let myAge = 23;
const getAge = isAgeEven(myAge);
console.log('my age even: ', getAge);

let herAge = 22;
const getAgeHer = isAgeEven(herAge);
console.log('Her age even: ', getAgeHer);