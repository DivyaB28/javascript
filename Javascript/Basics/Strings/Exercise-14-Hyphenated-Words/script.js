while (true) {
  let inputStr = prompt("Enter a hyphenated word:");

  if (inputStr.indexOf("-") !== -1) {
    let words = inputStr.split("-");
    for (let i = 0; i < words.length; i++) {
      document.write(words[i] + "<br>");
    }
    break;
  } else alert("Invalid input");
}
