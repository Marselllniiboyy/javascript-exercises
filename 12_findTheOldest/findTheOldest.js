const findTheOldest = function (arr) {
  return arr.reduce((oldest, curent) => {
    if (!oldest.yearOfDeath) {
      oldest.yearOfDeath = new Date().getFullYear();
    }
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    console.log(oldestAge, "old");
    const youngerAge = curent.yearOfDeath - curent.yearOfBirth;
    console.log(youngerAge, "curent");
    return youngerAge > oldestAge ? curent : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;
