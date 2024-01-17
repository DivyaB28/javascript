function toTitleCase(str) {
  let strArr = str.split(" ");
  let len = strArr.length;
  for (let i = 0; i < len; i++) {
    strArr[i] = strArr[i] && strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  let titleCaseStr = strArr[0];
  for (let i = 1; i < len; i++) {
    titleCaseStr += " " + strArr[i];
  }
  console.log(titleCaseStr);
  return titleCaseStr;
}
toTitleCase("this is the mesage");
toTitleCase("This is great.");
// 'This Is Great.'
toTitleCase("An awe-inspiring story!");
// 'An Awe-inspiring Story!'
toTitleCase("10 tips to become successful");
// '10 Tips To Become Successful'
toTitleCase("hello world!");
// 'Hello World!'
toTitleCase("HELLO WORLD!");
// 'HELLO WORLD!'
toTitleCase(" ");
// ' '
toTitleCase("");
// ''
