function getWords(str) {
  if (str === "") return [];

  let words = [];
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      "A" <= str[i] &&
      str[i] <= "Z" &&
      (("a" <= str[i - 1] && str[i - 1] <= "z") ||
        ("a" <= str[i + 1] && str[i + 1] >= "z"))
    ) {
      words.push(str.slice(index, i));
      index = i;
    }
  }
  words.push(str.slice(index));
  console.log(words);
  return words;
}
getWords("helloWorld");
//['hello', 'World']
getWords("innerHTML");
//['inner', 'HTML']
getWords("lastHTMLElement");
//['last', 'HTML', 'Element']
getWords("insertAdjacentElement");
//['insert', 'Adjacent', 'Element']
getWords("insertAdjacentHTML");
//['insert', 'Adjacent', 'HTML']
getWords("");
//[]
