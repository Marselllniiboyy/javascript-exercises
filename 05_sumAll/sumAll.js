const sumAll = function(start,and) {
    if (typeof(start) !== typeof(and) || start < 0 || and < 0) {
        return "ERROR";
    }
 let sum = 0;
        if (start > and){
            for (let i = and; i <= start; i++){
                sum += i;
            }
        }else if (start <= and) {
            for (let i = start; i <= and;i++){
                sum = sum + i;
            }
        }
    return sum;
};
// AllDone
// Do not edit below this line
module.exports = sumAll;
