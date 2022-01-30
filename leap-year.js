function isLeepYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

const myYear = 2300;
const isMyleepYear = isLeepYear(myYear);
console.log('isMyleepYear:', isMyleepYear);

const yourYear = 2020;
const isYourYear = isLeepYear(yourYear);
console.log('isYourYear: ', isYourYear);