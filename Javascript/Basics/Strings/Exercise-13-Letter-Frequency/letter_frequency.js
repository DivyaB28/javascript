function logLetterFrequency(str) {
  const CODE_LOWERCASE_A = "a".charCodeAt();
  let letterCounts = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ];
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if ("a" <= str[i] && str[i] <= "z") {
      letterCounts[str[i].charCodeAt() - CODE_LOWERCASE_A]++;
    }
  }
  let outStr = "";
  for (let i = 0, len = letterCounts.length - 4; i < len; i += 4) {
    outStr +=
      `${String.fromCharCode(i + CODE_LOWERCASE_A)} : ${letterCounts[i]}    ` +
      `${String.fromCharCode(i + 1 + CODE_LOWERCASE_A)} : ${
        letterCounts[i + 1]
      }     ` +
      `${String.fromCharCode(i + 2 + CODE_LOWERCASE_A)} : ${
        letterCounts[i + 2]
      }     ` +
      `${String.fromCharCode(i + 3 + CODE_LOWERCASE_A)} : ${
        letterCounts[i + 3]
      }\n`;
  }
  outStr += `y : ${letterCounts[24]}    ` + `z: ${letterCounts[25]}`;
  return outStr;
}
console.log(
  logLetterFrequency("This is just amazing to know. I wish I was there.")
);
