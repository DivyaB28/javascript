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

function camelToTitleCase(str) {
  if (str === "") {
    return "";
  }

  var words = getWords(str);
  // Uppercase the first letter of the first word.
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  console.log(words.join(" "));
  return words.join(" ");
}

camelToTitleCase("insertHTML");
// 'Insert HTML'
camelToTitleCase("insertAdjacentHTML");
// 'Insert Adjacent HTML'
camelToTitleCase("firstHTMLElement");
// 'First HTML Element'
camelToTitleCase("releaseDate");
// 'Release Date'
camelToTitleCase("");
// ''
