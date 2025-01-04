const reverseString = function(strings) {
    // mine
    let mySplit = strings.split('').reverse();
    let myReverse ='';
    for (const string of mySplit ){
        myReverse += string;
    }
    return myReverse;
    // solution
    // return strings.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
