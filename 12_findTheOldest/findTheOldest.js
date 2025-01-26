const findTheOldest = function(peopleArray) {
    const ACTUAL_YEAR = 2025
    let oldestPerson = peopleArray[0]
    const restOfPeople = peopleArray.slice(1, peopleArray.length);
    for (const person of restOfPeople){
        let oldestPersonAge = ACTUAL_YEAR - oldestPerson.yearOfBirth;
        if (oldestPerson.yearOfDeath) {
            oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        }
        let currentPersonAge = ACTUAL_YEAR - person.yearOfBirth;
        console.log(currentPersonAge)
        if (person.yearOfDeath) {
            currentPersonAge =  person.yearOfDeath - person.yearOfBirth;
        }
        console.log(currentPersonAge)
        //console.log(person.name,currentPersonAge, oldestPerson.name, oldestPersonAge)
        if (oldestPersonAge < currentPersonAge) {
            oldestPerson = person;
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
