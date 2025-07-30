const findTheOldest = function(peopleArray) {
    let oldestPerson;
    let age = 0;
    const currentDate = new Date();
    let oldestYear = currentDate.getFullYear();

    peopleArray.forEach((people) => {

        if(people.yearOfDeath !== undefined) {
            oldestYear = people.yearOfDeath;            
        }
        
        let newAge = oldestYear - people.yearOfBirth;

        if(newAge>age) {
            age = newAge;
            oldestPerson = people;
        }

    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
