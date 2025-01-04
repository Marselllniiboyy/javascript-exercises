const repeatString = function(string,num) {
    let totalString = '';
    if(num < 0) {
        totalString = 'ERROR';
    }
 for(let i = 0; i < num ;i++){
    totalString += string;
 }
    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
