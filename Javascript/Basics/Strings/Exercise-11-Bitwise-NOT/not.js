function not(binStr) {
  let outputStr = "";
  for (let i = 0; i < binStr.length; i++) {
    if (binStr[i] == "0") {
      outputStr += "1";
    } else {
      outputStr += "0";
    }
  }
  return outputStr;
}

console.log(not("1010"));
