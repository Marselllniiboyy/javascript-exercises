const palindromes = function (sentence) {
  const stemp = sentence.split(" ").join().replaceAll(",", "");
  let paliSentence = "";
  let sign = "";
  console.log(stemp);

  for (let i = stemp.length - 1; i >= 0; i--) {
    if (stemp.charAt(i) === "!" || stemp.charAt(i) === ".") {
      sign += stemp.charAt(i);
    } else {
      paliSentence = paliSentence + stemp.charAt(i);
    }
  }

  if (sign) {
    paliSentence = paliSentence + sign;
  }

  if (paliSentence.toLowerCase() === stemp.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
