function endsWithPolyfill(str, substr, length) {
  if (!length) {
    length = substr.length;
  }
  console.log(str.indexOf(substr) + substr.length - 1 === str.length - 1);

  //   str.indexOf(substr) + substr.length - 1 === str.length - 1
  return str.slice(length - substring.length, length) === substr;
}
console.log("hiiiiii000");
console.log(endsWithPolyfill("Hello", "o"));
console.log(endsWithPolyfill("Hello", "o", 2));
console.log(endsWithPolyfill("Hello", "lo", 5));
console.log(endsWithPolyfill("Hello", "d", 4));
endsWithPolyfill("Hello", "o");
// true
endsWithPolyfill("Hello", "ell");
// false
endsWithPolyfill("Hello", "ell", 4);
// true
endsWithPolyfill("Food.", ".");
// true
endsWithPolyfill("Food.", "d", 4);
