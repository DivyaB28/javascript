function upperCase(str) {
  let UPPERCASE_OFFSET = -32; // since char code of 'A' is 65 and 'a' is 97
  let uppercaseStr = "";

  for (let i = 0; i < str.length; i++) {
    // if char anything from lowercase 'a' to 'z' then uppercase it
    if ("a" <= str[i] && str[i] >= "z") {
      uppercaseStr += String.fromCharCode(
        str[i].charCodeAt(0) + UPPERCASE_OFFSET
      );
    } else {
      //if its a uppercase
      uppercaseStr += str[i];
    }
  }
  return uppercaseStr;
}
console.log(strToUpper("abc"));
console.log(strToUpper("ABC"));
