function hourToMinutes(hour) {
    let getMinutes = hour * 60;
    return getMinutes;
}

const myMinutes = 2;
const getMinutes = hourToMinutes(myMinutes);
console.log(myMinutes, 'Hour =', getMinutes, 'Minutes');

const herMinutes = 3;
const getMinutesHer = hourToMinutes(herMinutes);
console.log(herMinutes, 'Hour =', getMinutesHer, 'Minutes');