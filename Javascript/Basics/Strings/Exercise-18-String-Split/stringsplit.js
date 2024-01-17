function stringSplit(str, delimiter) {
  let outputArr = [];
  let len = str.length;
  if (delimiter === "") {
    //loop through the str to get each char
    for (let i = 0; i < len; i++) {
      outputArr.push(str[i]);
    }
    return outputArr;
  }

  //to keep track of delimiter index
  let index = 0;
  // value returned by indexOf()
  let indexOfValue;
  let delimiterLen = delimiter.length;

  //   for (let i = 0; i < len; i++) {
  //     if (str[i] === delimiter) {
  //       outputArr.push(str.slice(index, i));
  //       index = i;
  //     }
  //   }

  while ((indexOfValue = str.indexOf(delimiter, index)) !== -1) {
    outputArr.push(str.slice(index, indexOfValue));
    index = indexOfValue + delimiterLen;
  }
  outputArr.push(str.slice(index));
  return outputArr;
}
console.log(stringSplit("a|b|c", ""));
// ['a', 'b', 'c']
console.log(stringSplit("a b c", " "));
//['a', 'b', 'c']
console.log(stringSplit("a, b, c", ""));
// ['a', ',', ' ', 'b', ',', ' ', 'c']
console.log(stringSplit("a||b||c", "||"));
// ['a', 'b', 'c']
console.log(stringSplit("a : b : c", " : "));
// ['a', 'b', 'c']
console.log(stringSplit("aZZZbZZZc", "ZZZ"));
// ['a', 'b', 'c']
console.log(stringSplit("aZZZbZZZc", "ZZ"));
// ['a', 'Zb', 'Zc']
console.log(stringSplit("a, b, c", ""));
// ['a', ',', ' ', 'b', ',', ' ', 'c']
